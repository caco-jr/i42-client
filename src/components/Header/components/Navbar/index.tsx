import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { NavbarInterface } from './navbar.interface';
import { getCategoryURL } from '@helpers/urls';

const Navbar = (props: NavbarInterface) => {
  const componentClassName = 'navbar';
  const [navItems, setNavItems] = useState();
  const [pathArray, setPathArray] = useState();

  useEffect(() => {
    // getMenuAPI('principal').then(response => setNavItems(response.data))
  }, []);

  // useEffect(() => {
  //   setPathArray(props.location.pathname.split('/'))
  // }, [props.location.pathname])

  const isSelectedItem = (menuItem: string): boolean =>
    pathArray[2] === menuItem;

  return (
    <nav className={componentClassName}>
      {navItems ? (
        <>
          {navItems.map((item: any, index: number) => (
            <Link href={getCategoryURL(item.slug)} key={index}>
              <a
                className={
                  isSelectedItem(item.slug)
                    ? `${componentClassName}__item ${componentClassName}__item--active`
                    : `${componentClassName}__item`
                }
              >
                {item.title}
              </a>
            </Link>
          ))}

          <span className={`${componentClassName}__line`} />
        </>
      ) : null}
    </nav>
  );
};

export default withRouter(Navbar);
