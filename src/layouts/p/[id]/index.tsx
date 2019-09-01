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
import PostPageSEO from './components/SEO';

interface Props extends AppProps {}

const getPostQuery = gql`
  query post($slug: String) {
    postBy(slug: $slug) {
      postId
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
      modified
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
      author {
        name
        avatar(size: 106) {
          url
        }
      }
      seo {
        title
        metaDesc
        metaKeywords
        opengraphDescription
        opengraphTitle
        opengraphImage
        twitterImage
        twitterTitle
        twitterDescription
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

const handleContent = (content: string): string =>
  content.replace(/<iframe (.*?) id=\"blubrryplayer-1\" (.*?)><\/iframe>/i, '');

const getPodcastAttributes = (content: string): { src: string } => {
  const contentSplitted = content.split(
    /<iframe (.*?) id=\"blubrryplayer-1\" (.*?)><\/iframe>/i
  )[1];

  const src = contentSplitted
    ? JSON.parse(contentSplitted.split(/\s+/g)[0].match(/"(.*?)"/)[0])
    : '';

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
                  postId,
                  title,
                  content,
                  featuredImage,
                  extra,
                  date,
                  modified,
                  podcast,
                  author,
                  tags,
                  categories,
                  seo
                } = postBy;

                return (
                  <>
                    <PostPageSEO
                      title={seo.title}
                      description={seo.metaDesc}
                      url={router.asPath}
                      openGraph={{
                        title: seo.opengraphTitle,
                        description: seo.opengraphDescription,
                        images: [
                          {
                            url: seo.opengraphImage || featuredImage.sourceUrl,
                            height: 650,
                            width: 850,
                            alt: featuredImage.altText
                          }
                        ]
                      }}
                      article={{
                        publishedTime: date,
                        modifiedTime: modified,
                        tags: tags.nodes.map(item => item.name),
                        section: categories.nodes[0]
                          ? categories.nodes[0].name
                          : '',
                        authors: [
                          { name: author.name, image: author.avatar.url }
                        ]
                      }}
                    />

                    {podcast.isPodcastPost ? (
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
                        review={{ hasRating: false, rating: null }}
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
                      postIdExclude={postId}
                      title={title}
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
