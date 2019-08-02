import React from 'react';
import gql from 'graphql-tag';

import Button from '@components/Button';
import SvgLoader from '@components/SvgLoader';
import { Query, Mutation } from 'react-apollo';
import { PostPageToggleModeWrapper } from './index.style';

const GET_COLOR_MODE = gql`
  {
    configuration @client {
      colorMode
    }
  }
`;

const SET_COLOR_MODE = gql`
  mutation SetConfiguration($colorMode: String!) {
    setConfiguration(colorMode: $colorMode) @client
  }
`;

const PostPageToggleMode = () => (
  <Query query={GET_COLOR_MODE}>
    {({ data: { configuration } }) => (
      <Mutation mutation={SET_COLOR_MODE}>
        {setConfiguration => {
          const componentClassName = 'post-page-toggle-mode';
          const isDarkMode = configuration.colorMode === 'dark';

          const toggleMode = (): void => {
            isDarkMode
              ? setConfiguration({
                  variables: { colorMode: 'light' }
                })
              : setConfiguration({
                  variables: { colorMode: 'dark' }
                });
          };

          return (
            <PostPageToggleModeWrapper>
              <Button
                type="button"
                className={`${componentClassName} ${componentClassName}--${
                  configuration.colorMode
                }`}
                styleType="basic"
                onClick={toggleMode}
              >
                <span> Modo noturno </span>

                <SvgLoader
                  name="sun"
                  className={`${componentClassName}__icon`}
                />
              </Button>
            </PostPageToggleModeWrapper>
          );
        }}
      </Mutation>
    )}
  </Query>
);

export default PostPageToggleMode;
