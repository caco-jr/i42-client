import styled from 'styled-components';

export const PostContentWrapper = styled.section`
  min-height: 400px;

  * {
    max-width: 100%;
    word-break: break-word;
  }

  p {
    font-size: 1.125em;
    line-height: 1.8;
  }

  h2,
  h3,
  h4 {
    margin: 30px 0 15px;
  }

  h3 {
    font-size: 1.5em;
  }

  figure {
    margin: 1.25em auto;
  }

  img {
    margin: 15px auto;
  }

  ul {
    padding: 0 20px;
    line-height: 1.5;
  }

  a {
    color: var(--text-color);
  }

  iframe,
  .aligncenter {
    display: block;
    margin: 0 auto;
  }

  .arve-embed-container {
    padding: 0 !important;
  }

  .wp-block-embed-youtube {
    figcaption {
      margin: 20px 0 0;
    }
  }
`;
