import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { PostPageBaseWrapper } from './index.style';

const GET_COLOR_MODE = gql`
  {
    configuration @client {
      colorMode
    }
  }
`;

const PostPageBase = ({ children }) => (
  <Query query={GET_COLOR_MODE}>
    {({ data: { configuration } }) => {
      const colorTheme = configuration ? configuration.colorMode : 'dark';

      return (
        <PostPageBaseWrapper data-theme={colorTheme}>
          {children}
        </PostPageBaseWrapper>
      );
    }}
  </Query>
);

export default PostPageBase;
