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

const getPost = gql`
  query post($slug: String!) {
    post(slug: $slug) {
      id
      title
      content
      media {
        thumbnail
      }
      date
      acf {
        subtitle
        is_podcast_post
        episode_participants {
          id
          avatar
          display_name
        }
      }
      author {
        name
        avatar_url
      }
      tags {
        name
      }
      categories {
        name
      }
    }
  }
`;

const handleParticipantsPost = ({ acf, author }): ReactNode => {
  if (!acf) {
    return <PostAuthor image={author.avatar_url} name={author.name} />;
  }

  if (acf.is_podcast_post) {
    return (
      <EpisodeParticipants episodeParticipants={acf.episode_participants!} />
    );
  } else {
    return <PostAuthor image={author.avatar_url} name={author.name} />;
  }
};

const handleContent = (content: string): string => {
  const contentSplitted = content.split(
    /<iframe (.*?) id=\"blubrryplayer-1\"><\/iframe>/i
  );

  return contentSplitted.filter((item, index) => index !== 1).join('');
};

const getPodcastAttributes = (content: string): string =>
  content.split(/<iframe (.*?) id=\"blubrryplayer-1\"><\/iframe>/i)[1];

const Layout = ({ router }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <PostPageBase>
            <Query query={getPost} variables={{ slug: router.query.id }}>
              {({ loading, data: { post } }) => {
                if (loading) {
                  return <h1>Carregando...</h1>;
                }

                const {
                  title,
                  acf,
                  media,
                  date,
                  content,
                  author,
                  id,
                  tags,
                  categories
                } = post;

                return (
                  <>
                    {acf && acf.is_podcast_post ? (
                      <PostScreenPodcastHeader
                        title={title}
                        id={id}
                        image="https://i0.wp.com/imperio42.com.br/wp-content/uploads/2019/04/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg?fit=1310%2C670&#038;ssl=1"
                        attributes={getPodcastAttributes(content)}
                      />
                    ) : (
                      <PostScreenHeader
                        title={title}
                        subtitle={acf.subtitle}
                        image={media.thumbnail}
                        date={date}
                        acf={acf}
                      />
                    )}

                    <Row>
                      <Col lg={8}>
                        <PostContent content={handleContent(content)} />
                      </Col>

                      <Col lg={4}>
                        {handleParticipantsPost({
                          acf,
                          author
                        })}
                      </Col>
                    </Row>

                    <PostRelatedContent
                      tags={tags.map(item => item.name)}
                      categories={categories.map(item => item.name)}
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
