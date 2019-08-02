import React from 'react';

import PostPageToggleMode from '../ToggleMode';
import { PostScreenHeaderInterface } from './post-screen-header.interface';
import Rating from '../Rating';
import { handleImageSize } from '@utils/image';
import { decode, handleFullDate } from '@helpers/helpers';
import {
  PostScreenHeaderWrapper,
  PostScreenHeaderTitle,
  PostScreenHeaderSubTitle,
  PostScreenHeaderImage,
  PostScreenHeaderDate,
  PostScreenHeaderLeftColumn,
  PostScreenHeaderRightColumn
} from './index.style';
import { Row, Col } from 'react-grid-system';

const PostScreenHeader = ({
  title,
  subtitle,
  image,
  date,
  acf
}: PostScreenHeaderInterface) => {
  return (
    <PostScreenHeaderWrapper>
      <Row>
        <Col lg={9}>
          <PostScreenHeaderLeftColumn>
            <PostScreenHeaderTitle>{decode(title)}</PostScreenHeaderTitle>

            {subtitle ? (
              <PostScreenHeaderSubTitle>
                {decode(subtitle)}
              </PostScreenHeaderSubTitle>
            ) : null}

            {acf ? acf.has_rating && <Rating rating={acf.rating!} /> : null}
          </PostScreenHeaderLeftColumn>
        </Col>

        <Col lg={3}>
          <PostScreenHeaderRightColumn>
            {date ? (
              <PostScreenHeaderDate>
                {handleFullDate(date)}
              </PostScreenHeaderDate>
            ) : null}

            <PostPageToggleMode />
          </PostScreenHeaderRightColumn>
        </Col>
      </Row>

      <PostScreenHeaderImage
        src={handleImageSize(image, 1000, 470)}
        alt={title}
      />
    </PostScreenHeaderWrapper>
  );
};

export default PostScreenHeader;
