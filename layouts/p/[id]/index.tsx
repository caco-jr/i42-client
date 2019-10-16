import React, { ReactNode } from 'react';
import { ScreenClassProvider, Container, Row, Col } from 'react-grid-system';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

import BodyBackground from '@components/BodyBackground';
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
import Footer from '@components/Footer';
import PostPageLoading from './components/Loading';
import { handleLimitCharacters, decode } from '@helpers/helpers';
import PostScreenAudima from './components/Audima';
import { PostScreenWrapper } from './index.style';
import ReadMore from './components/ReadMore';

interface Props extends AppProps {}

const GET_POST_QUERY = gql`
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
        rating
        readMore {
          ... on Post {
            title
            featuredImage {
              sourceUrl
              sizes
              altText
            }
            slug
            date
          }
        }
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
  const componentClassName = 'c-post-screen';
  const { loading, error, data } = useQuery(GET_POST_QUERY, {
    variables: { slug: router.query.id }
  });

  if (loading) {
    return (
      <ScreenClassProvider>
        <BodyBackground>
          <Header />

          <Container>
            <PostPageBase>
              <PostPageLoading />
            </PostPageBase>
          </Container>
        </BodyBackground>

        <Footer />
      </ScreenClassProvider>
    );
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
  } = data.postBy;

  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <PostScreenWrapper>
            <PostPageBase>
              <PostPageSEO
                title={decode(seo.title)}
                description={
                  seo.metaDesc || handleLimitCharacters(decode(content))
                }
                url={router.asPath}
                openGraph={{
                  title: decode(seo.opengraphTitle),
                  description:
                    seo.opengraphDescription ||
                    handleLimitCharacters(decode(content)),
                  images: [
                    {
                      url: seo.opengraphImage || featuredImage.sourceUrl,
                      height: 650,
                      width: 850,
                      alt: decode(featuredImage.altText)
                    }
                  ]
                }}
                article={{
                  publishedTime: date,
                  modifiedTime: modified,
                  tags: tags.nodes.map(item => item.name),
                  section: categories.nodes[0] ? categories.nodes[0].name : '',
                  authors: [{ name: author.name, image: author.avatar.url }]
                }}
              />

              {podcast.isPodcastPost ? (
                <PostScreenPodcastHeader
                  title={title}
                  media={featuredImage}
                  podcastSrc={getPodcastAttributes(content).src}
                />
              ) : (
                <PostScreenHeader
                  title={title}
                  subtitle={extra.subtitle}
                  media={featuredImage}
                  date={date}
                  rating={extra.rating}
                />
              )}

              <Row>
                <Col lg={8} className={`${componentClassName}__left-column`}>
                  <PostScreenAudima />

                  <PostContent content={handleContent(content)} />

                  {handleParticipantsPost({
                    podcast,
                    author
                  })}
                </Col>
                <Col lg={4} className={`${componentClassName}__right-column`}>
                  <ReadMore posts={extra.readMore} />
                </Col>
              </Row>

              <PostRelatedContent
                postIdExclude={postId}
                title={title}
                tags={tags.nodes.map(item => item.name)}
                categories={categories.nodes.map(item => item.name)}
              />
            </PostPageBase>
          </PostScreenWrapper>
        </Container>
      </BodyBackground>

      <Footer />
    </ScreenClassProvider>
  );
};

export default Layout;
