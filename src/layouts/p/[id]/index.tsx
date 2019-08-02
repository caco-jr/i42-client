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
                  return <h1>Olá</h1>;
                } else {
                  console.log(post);
                  const { title, acf, media, date, content, author, id } = post;

                  return (
                    <>
                      {acf && acf.is_podcast_post ? (
                        <PostScreenPodcastHeader
                          title={title}
                          id={id}
                          image="https://i0.wp.com/imperio42.com.br/wp-content/uploads/2019/04/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg?fit=1310%2C670&#038;ssl=1"
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
                          <PostContent content={content} />
                        </Col>

                        <Col lg={4}>
                          {handleParticipantsPost({
                            acf,
                            author
                          })}
                        </Col>
                      </Row>
                    </>
                  );
                }
              }}
            </Query>
          </PostPageBase>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
