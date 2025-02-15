import React from 'react';

import { PostPageBaseWrapper } from './index.style';
import { usePageContext } from '@controllers/p/[id]';

const PostPageBase = ({ children }) => {
  const [state, setState] = usePageContext();

  return (
    <PostPageBaseWrapper data-theme={state.colorMode}>
      {children}
    </PostPageBaseWrapper>
  );
};

export default PostPageBase;
