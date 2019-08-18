import React from 'react';
import { Row, Col } from 'react-grid-system';

import PostPageToggleMode from '../ToggleMode';
import { PostScreenHeaderInterface } from './post-screen-header.interface';
import Rating from '../Rating';
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

const PostScreenHeader = ({
  title,
  subtitle,
  media,
  date,
  review
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

            {review.hasRating && <Rating rating={review.rating} />}
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
        src={media.sourceUrl}
        alt={media.altText}
        sizes={media.sizes}
        srcSet={media.srcSet}
      />
    </PostScreenHeaderWrapper>
  );
};

export default PostScreenHeader;
