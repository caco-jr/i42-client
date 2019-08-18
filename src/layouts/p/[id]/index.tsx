import React, { ReactNode } from 'react';
import { ScreenClassProvider, Container, Row, Col } from 'react-grid-system';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import PostPageBase from './components/Base';
import { AppProps } from '@pages/_app';
import PostScreenHeader from './components/Header';
import PostContent from './components/Content';
import PostAuthor from './components/Author';
import EpisodeParticipants from './components/EpisodeParticipants';
import PostScreenPodcastHeader from './components/PodcastHeader';
import PostRelatedContent from './components/RelatedContent';

interface Props extends AppProps {}

const getPostQuery = gql`
  query post($slug: String) {
    postBy(slug: $slug) {
      id
      title
      content
      featuredImage {
        sourceUrl
        srcSet
        sizes
        altText
      }
      extra {
        subtitle
      }
      date
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      podcast {
        isPodcastPost
        episodeParticipants {
          name
          avatar {
            url
          }
        }
      }
      review {
        hasRating
        rating
      }
      author {
        name
        avatar(size: 106) {
          url
        }
      }
    }
  }
`;

const handleParticipantsPost = ({ podcast, author }): ReactNode => {
  if (podcast.isPodcastPost) {
    return (
      <EpisodeParticipants episodeParticipants={podcast.episodeParticipants} />
    );
  } else {
    return <PostAuthor image={author.avatar.url} name={author.name} />;
  }
};

const handleContent = (content: string): string => {
  const contentSplitted = content.split(
    /<iframe (.*?) id=\"blubrryplayer-1\"><\/iframe>/i
  );

  return contentSplitted.filter((item, index) => index !== 1).join('');
};

const getPodcastAttributes = (content: string): { src: string } => {
  const contentSplitted = content.split(
    /<iframe (.*?) id=\"blubrryplayer-1\"><\/iframe>/i
  )[1];

  const src = JSON.parse(contentSplitted.split(/\s+/g)[0].match(/"(.*?)"/)[0]);

  return { src };
};

const Layout = ({ router }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <PostPageBase>
            <Query query={getPostQuery} variables={{ slug: router.query.id }}>
              {({ loading, data: { postBy } }) => {
                if (loading) {
                  return <h1>Carregando...</h1>;
                }

                const {
                  title,
                  content,
                  featuredImage,
                  extra,
                  date,
                  podcast,
                  author,
                  id,
                  tags,
                  categories,
                  review
                } = postBy;

                return (
                  <>
                    {podcast.is_podcast_post ? (
                      <PostScreenPodcastHeader
                        title={title}
                        image="https://i0.wp.com/imperio42.com.br/wp-content/uploads/2019/04/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg?fit=1310%2C670&#038;ssl=1"
                        podcastSrc={getPodcastAttributes(content).src}
                      />
                    ) : (
                      <PostScreenHeader
                        title={title}
                        subtitle={extra.subtitle}
                        media={featuredImage}
                        date={date}
                        review={review}
                      />
                    )}

                    <Row>
                      <Col lg={8}>
                        <PostContent content={handleContent(content)} />
                      </Col>

                      <Col lg={4}>
                        {handleParticipantsPost({
                          podcast,
                          author
                        })}
                      </Col>
                    </Row>

                    <PostRelatedContent
                      tags={tags.nodes.map(item => item.name)}
                      categories={categories.nodes.map(item => item.name)}
                    />
                  </>
                );
              }}
            </Query>
          </PostPageBase>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
