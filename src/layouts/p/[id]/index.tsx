import React from 'react';
import { ScreenClassProvider, Container } from 'react-grid-system';

import BodyBackground from '@static/styles/BodyBackground';
import Header from '@components/Header';
import PostPageToggleMode from './components/ToggleMode';
import PostPageBase from './components/Base';

interface Props {}

const Layout = ({  }: Props) => {
  return (
    <ScreenClassProvider>
      <BodyBackground>
        <Header />

        <Container>
          <PostPageBase>
            <PostPageToggleMode />
          </PostPageBase>
        </Container>
      </BodyBackground>
    </ScreenClassProvider>
  );
};

export default Layout;
