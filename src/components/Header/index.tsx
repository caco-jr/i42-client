import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-grid-system';

import { HeaderWrapper, HeaderRightColumn } from './header.style';
import { GlobalStyle } from '@static/styles/GlobalStyle';
import SvgLoader from '@components/SvgLoader';
import Search from './components/Search';
import Navbar from './components/Navbar';

const Header = () => {
  const componentClassName = 'header-bar';

  return (
    <HeaderWrapper>
      <GlobalStyle />

      <Container style={{ width: '100%' }}>
        <Row>
          <Col sm={2}>
            <Link href="/">
              <a className={`${componentClassName}__logo`}>
                <SvgLoader
                  name="logo"
                  className={`${componentClassName}__logo-image`}
                />
              </a>
            </Link>
          </Col>

          <Col sm={10}>
            <HeaderRightColumn>
              <Navbar />

              <Search />
            </HeaderRightColumn>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
