import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {
  FooterWrapper,
  FooterTop,
  FooterBottom,
  FooterTitle,
  FooterList,
  FooterListItem
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
              xs={6}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Sobre</FooterTitle>

              <FooterList>
                <FooterListItem>
                  <a
                    href="mailTo:contato@imperio42.com.br"
                    target="_blank"
                    aria-label={`Mande um email para nós`}
                  >
                    Fale conosco
                  </a>
                </FooterListItem>
              </FooterList>
            </Col>

            <Col
              xs={6}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Programas</FooterTitle>

              <FooterList>
                <FooterListItem>
                  <Link {...getCategoryURL('nave-mainha')}>
                    <a aria-label={`Ir para a categoria Nave Mãinha`}>
                      Nave Mainha
                    </a>
                  </Link>
                </FooterListItem>

                <FooterListItem>
                  <Link {...getCategoryURL('imperialista')}>
                    <a aria-label={`Ir para a categoria Imperialista`}>
                      ImperiaLista
                    </a>
                  </Link>
                </FooterListItem>
              </FooterList>
            </Col>

            <Col
              xs={6}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Notícias</FooterTitle>

              <FooterList>
                <FooterListItem>
                  <Link {...getCategoryURL('cinema')}>
                    <a aria-label={`Ir para a categoria Cinema`}>Cinema</a>
                  </Link>
                </FooterListItem>

                <FooterListItem>
                  <Link {...getCategoryURL('series')}>
                    <a aria-label={`Ir para a categoria Séries`}>Séries</a>
                  </Link>
                </FooterListItem>

                <FooterListItem>
                  <Link {...getCategoryURL('games')}>
                    <a aria-label={`Ir para a categoria Games`}>Games</a>
                  </Link>
                </FooterListItem>
              </FooterList>
            </Col>

            <Col
              xs={6}
              sm={6}
              lg={3}
              className={`${componentClassName}__block`}
            >
              <FooterTitle>Redes sociais</FooterTitle>

              <FooterList>
                <FooterListItem>
                  <a
                    href="https://www.instagram.com/imperio_42"
                    target="_blank"
                    aria-label={`Nos siga no Instagram`}
                    rel="noopener"
                  >
                    Instagram
                  </a>
                </FooterListItem>

                <FooterListItem>
                  <a
                    href="https://twitter.com/imperio42"
                    target="_blank"
                    aria-label={`Nos siga no Twitter`}
                    rel="noopener"
                  >
                    Twitter
                  </a>
                </FooterListItem>
              </FooterList>
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
