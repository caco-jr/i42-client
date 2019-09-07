import React from 'react';

import {
  PostPageLoadingWrapper,
  PostPageLoadingBar,
  PostPageLoadingImage
} from './index.style';
import { Col, Row } from 'react-grid-system';

const PostPageLoading = () => {
  return (
    <PostPageLoadingWrapper>
      <Row>
        <Col xs={12} md={9}>
          <PostPageLoadingBar width="calc( 100% - 50px )" height={35} />
        </Col>

        <Col xs={12} md={3}>
          <PostPageLoadingBar />
          <PostPageLoadingBar
            style={{ marginTop: '10px', marginLeft: '30px' }}
            width="calc( 100% - 30px )"
          />
        </Col>
      </Row>

      <PostPageLoadingImage style={{ margin: '45px 0' }} />

      <Row>
        <Col xs={12} md={9}>
          <PostPageLoadingBar />
          <PostPageLoadingBar style={{ marginTop: '15px' }} />
          <PostPageLoadingBar
            width="calc( 100% - 150px )"
            style={{ marginTop: '15px' }}
          />

          <PostPageLoadingImage style={{ margin: '30px 0' }} />

          <PostPageLoadingBar style={{ marginTop: '15px' }} />
          <PostPageLoadingBar
            width="calc( 100% - 50px )"
            style={{ marginTop: '15px' }}
          />
        </Col>
      </Row>
    </PostPageLoadingWrapper>
  );
};

export default PostPageLoading;
