import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { HighlightBlockInterface } from './highlight-block.interface';
import PostCardCompact from '@components/PostCards/Compact';
import PostCardHorizontal from '@components/PostCards/Horizontal';
import PostCardCompactLoading from '@components/PostCards/Compact/Loading';
import PostCardHorizontalLoading from '@components/PostCards/Horizontal/Loading';
import SectionTitle from '@components/SectionTitle';
import {
  HighlightBlockWrapper,
  HighlightBlockPostsContainer
} from './index.style';

const postsByCategoryQuery = gql`
  query postsByCategory($categorySlug: String, $limit: Int) {
    posts(first: $limit, where: { categoryName: $categorySlug }) {
      nodes {
        title
        excerpt
        date
        featuredImage {
          sourceUrl
          altText
        }
        slug
        categories {
          nodes {
            slug
            name
            extra {
              categoryColor
            }
          }
        }
      }
    }
  }
`;

const HighlightBlock = (props: HighlightBlockInterface) => {
  const componentClassName = 'highlight-block';

  const { categorySlug, sectionTitle } = props;

  return (
    <Query query={postsByCategoryQuery} variables={{ categorySlug, limit: 3 }}>
      {({ loading, data: { posts } }) => (
        <HighlightBlockWrapper>
          <SectionTitle>{sectionTitle}</SectionTitle>

          <HighlightBlockPostsContainer>
            {!loading
              ? posts.nodes.map((post, index) => {
                  if (index === 0) {
                    return (
                      <PostCardCompact
                        key={index}
                        className={`${componentClassName}__post-large`}
                        media={post.featuredImage}
                        title={post.title}
                        slug={post.slug}
                        categories={post.categories}
                      />
                    );
                  } else {
                    return (
                      <PostCardHorizontal
                        className={`${componentClassName}__post`}
                        key={index}
                        media={post.featuredImage}
                        title={post.title}
                        slug={post.slug}
                        date={post.date}
                      />
                    );
                  }
                })
              : [...Array(3)].map((item, index) => {
                  if (index === 0) {
                    return (
                      <PostCardCompactLoading
                        key={index}
                        className={`${componentClassName}__post ${componentClassName}__post-loading`}
                      />
                    );
                  } else {
                    return (
                      <PostCardHorizontalLoading
                        key={index}
                        className={`${componentClassName}__post ${componentClassName}__post-horizontal-loading`}
                      />
                    );
                  }
                })}
          </HighlightBlockPostsContainer>
        </HighlightBlockWrapper>
      )}
    </Query>
  );
};

export default HighlightBlock;
