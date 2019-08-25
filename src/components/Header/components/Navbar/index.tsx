import React from 'react';
import { Visible, Hidden } from 'react-grid-system';

import NavbarDesktop from './Desktop';
import NavbarMobile from './Mobile';

const Navbar = () => {
  return (
    <>
      <Visible md lg xl>
        <NavbarDesktop />
      </Visible>

      <Hidden md lg xl>
        <NavbarMobile />
      </Hidden>
    </>
  );
};

export default Navbar;
