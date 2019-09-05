import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';

import { HeaderWrapper, HeaderRightColumn } from './header.style';
import { GlobalStyle } from '@static/styles/GlobalStyle';
import SvgLoader from '@components/SvgLoader';
import Search from './components/Search';
import NavbarMobile from './components/Navbar/Mobile';
import NavbarDesktop from './components/Navbar/Desktop';
import NavbarMobileButton from './components/Navbar/Mobile/Button/index';

const Header = () => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const componentClassName = 'header-bar';

  const handleMenuMobile = (isOpen: boolean) => {
    setIsMenuMobileOpen(isOpen);
  };

  return (
    <>
      <Hidden md lg xl>
        <NavbarMobile isVisible={isMenuMobileOpen} />
      </Hidden>

      <HeaderWrapper>
        <GlobalStyle />

        <Container style={{ width: '100%' }}>
          <Row>
            <Col xs={10} sm={2}>
              <Link href="/">
                <a className={`${componentClassName}__logo`}>
                  <SvgLoader
                    name="logo"
                    className={`${componentClassName}__logo-image`}
                  />
                </a>
              </Link>
            </Col>

            <Col xs={2} sm={10}>
              <HeaderRightColumn>
                <Visible md lg xl>
                  <NavbarDesktop />

                  <Search />
                </Visible>

                <Hidden md lg xl>
                  <NavbarMobileButton
                    isOpen={isMenuMobileOpen}
                    handleMenuMobile={handleMenuMobile}
                  />
                </Hidden>
              </HeaderRightColumn>
            </Col>
          </Row>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
