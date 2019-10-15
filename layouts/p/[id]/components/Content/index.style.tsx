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
    margin-bottom: 15px;
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

  .arve-wrapper {
    max-width: 100% !important;

    .arve-embed-container {
      position: relative;
      padding-bottom: 56.25% !important; /* 16:9 */
      padding-top: 25px !important;
      height: 0;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
      }
    }
  }

  .wp-block-embed-youtube {
    figcaption {
      margin: 20px 0 0;
    }
  }

  @media (min-width: 1200px) {
    padding-right: 35px;
  }

  @media (max-width: 992px) {
    margin-bottom: 50px;
  }
`;
