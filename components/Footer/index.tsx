import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterTitle
} from './index.style';
import Link from 'next/link';
import { getCategoryURL } from '../../helpers/urls';

const Footer = () => {
  const componentClassName = 'c-footer';

  return (
    <FooterWrapper>
      <FooterTop>
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Sobre</FooterTitle>

              <a href="mailTo:contato@imperio42.com.br" target="_blank">
                contato@imperio42.com.br
              </a>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Programas</FooterTitle>

              <Link {...getCategoryURL('nave-mainha')}>
                <a>Nave Mainha</a>
              </Link>

              <Link {...getCategoryURL('imperialista')}>
                <a>ImperiaLista</a>
              </Link>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Notícias</FooterTitle>

              <Link {...getCategoryURL('cinema')}>
                <a>Cinema</a>
              </Link>

              <Link {...getCategoryURL('series')}>
                <a>Séries</a>
              </Link>

              <Link {...getCategoryURL('games')}>
                <a>Games</a>
              </Link>
            </Col>

            <Col
              xs={12}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Redes sociais</FooterTitle>

              <a href="https://www.instagram.com/imperio_42" target="_blank">
                Instagram
              </a>

              <a href="https://twitter.com/imperio42" target="_blank">
                Twitter
              </a>
            </Col>
          </Row>
        </Container>
      </FooterTop>

      <FooterBottom>
        <Container>
          <p>© 2019 Império 42 | Versão 1.0 Λ</p>
          <p>
            Todas as imagens de filmes, séries e etc são marcas registradas dos
            seus respectivos proprietários.
          </p>
        </Container>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
