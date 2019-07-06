import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid-system';

// import './header.scss'
import SvgLoader from '@components/SvgLoader';
import Navbar from './components/Navbar';
import Search from './components/Search';
import HeaderWrapper from './header.style';
import { GlobalStyle } from '@static/styles/GlobalStyle';

const Header = () => {
  const componentClassName = 'header-bar';

  return (
    <HeaderWrapper>
      <GlobalStyle />

      <Container style={{ width: '100%' }}>
        <Row>
          <Col sm={3}>
            <Link href="/">
              <a className={`${componentClassName}__logo`}>
                <SvgLoader
                  name="logo"
                  className={`${componentClassName}__logo-image`}
                />
              </a>
            </Link>
          </Col>

          <Col sm={9}>
            <Navbar />

            <Search />
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
