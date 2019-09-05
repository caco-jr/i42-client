import React from 'react';

import Button from '@components/Button';
import SvgLoader from '@components/SvgLoader';
import { PostPageToggleModeWrapper } from './index.style';
import { usePageContext } from '@controllers/p/[id]';

const PostPageToggleMode = () => {
  const [state, setState] = usePageContext();

  const componentClassName = 'post-page-toggle-mode';
  const isDarkMode = state.colorMode === 'dark';

  const toggleMode = (): void => {
    isDarkMode
      ? setState({ ...state, colorMode: 'light' })
      : setState({ ...state, colorMode: 'dark' });

    isDarkMode
      ? localStorage.setItem('colorMode', 'light')
      : localStorage.setItem('colorMode', 'dark');
  };

  return (
    <PostPageToggleModeWrapper>
      <Button
        type="button"
        className={`${componentClassName} ${componentClassName}--${state.colorMode}`}
        styleType="basic"
        onClick={toggleMode}
      >
        <span> Modo noturno </span>

        <SvgLoader name="sun" className={`${componentClassName}__icon`} />
      </Button>
    </PostPageToggleModeWrapper>
  );
};

export default PostPageToggleMode;
