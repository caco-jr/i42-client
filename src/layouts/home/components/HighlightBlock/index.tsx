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
  query postsByCategory($ID: Int!, $limit: Int) {
    postsByCategory(ID: $ID, limit: $limit) {
      title
      media {
        thumbnail
      }
      date_modified
      slug
      categories {
        slug
        name
        color
      }
    }
  }
`;

const HighlightBlock = (props: HighlightBlockInterface) => {
  const componentClassName = 'highlight-block';

  const { categoryID, sectionTitle } = props;

  return (
    <Query
      query={postsByCategoryQuery}
      variables={{ ID: categoryID, limit: 3 }}
    >
      {({ loading, data: { postsByCategory } }) => (
        <HighlightBlockWrapper>
          <SectionTitle>{sectionTitle}</SectionTitle>

          <HighlightBlockPostsContainer>
            {!loading
              ? postsByCategory.map((post, index) => {
                  if (index === 0) {
                    return (
                      <PostCardCompact
                        key={index}
                        className={`${componentClassName}__post-large`}
                        image={post.media.thumbnail}
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
                        image={post.media.thumbnail}
                        title={post.title}
                        slug={post.slug}
                        date={post.date_modified}
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
