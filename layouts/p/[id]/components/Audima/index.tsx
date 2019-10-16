import React from 'react';
import { PostScreenAudimaWrapper } from './index.style';

const PostScreenAudima = () => (
  <>
    <PostScreenAudimaWrapper id="audimaWidget" />
    <script src="https://audio.audima.co/audima-widget.js" defer></script>
  </>
);

export default PostScreenAudima;
