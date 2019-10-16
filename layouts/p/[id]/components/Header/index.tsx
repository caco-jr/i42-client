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
  const componentClassName = 'c-post-screen-header';

  return (
    <PostScreenHeaderWrapper>
      <PostScreenHeaderImage
        src={media.sourceUrl}
        alt={media.altText}
        srcSet={media.srcSet}
      />

      <Row>
        <Col lg={8} className={`${componentClassName}__left-column`}>
          <PostScreenHeaderLeftColumn>
            <PostScreenHeaderTitle>{decode(title)}</PostScreenHeaderTitle>

            {subtitle ? (
              <PostScreenHeaderSubTitle>
                {decode(subtitle)}
              </PostScreenHeaderSubTitle>
            ) : null}

            {review.hasRating && <Rating rating={review.rating} />}

            <PostPageToggleMode />

            {date ? (
              <PostScreenHeaderDate>
                {handleFullDate(date)}
              </PostScreenHeaderDate>
            ) : null}
          </PostScreenHeaderLeftColumn>
        </Col>

        <Col lg={4} className={`${componentClassName}__right-column`}>
          <PostScreenHeaderRightColumn>teste</PostScreenHeaderRightColumn>
        </Col>
      </Row>
    </PostScreenHeaderWrapper>
  );
};

export default PostScreenHeader;
