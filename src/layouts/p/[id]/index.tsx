import React from 'react';
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

interface Props extends AppProps {}

const getPost = gql`
  query post($slug: String!) {
    post(slug: $slug) {
      title
      content
      media {
        thumbnail
      }
      date
      acf {
        subtitle
      }
      author {
        name
        avatar_url
      }
    }
  }
`;

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
                  const { title, acf, media, date, content, author } = post;

                  return (
                    <>
                      <PostScreenHeader
                        title={title}
                        subtitle={acf.subtitle}
                        image={media.thumbnail}
                        date={date}
                        acf={acf}
                      />

                      <Row>
                        <Col lg={8}>
                          <PostContent content={content} />
                        </Col>

                        <Col lg={4}>
                          <PostAuthor
                            name={author.name}
                            image={author.avatar_url}
                          />
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
