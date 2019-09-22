import React, { useRef, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';
import Link from 'next/link';

import { getCategoryURL } from '@helpers/urls';
import {
  NavbarMobileWrapper,
  NavbarMobileItem,
  NavbarMobileList
} from './index.style';
import { Container } from 'react-grid-system';

interface Props {
  isVisible: boolean;
}

const MENU_QUERY = gql`
  query menuByID($id: ID!) {
    menu(id: $id) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
  }
`;

const handleURL = (url: string): string => {
  const urlSplited = url.split('/');

  return urlSplited[urlSplited.length - 2];
};

const NavbarMobile = ({ isVisible }: Props) => {
  const componentClassName = 'c-navbar-mobile';
  const navbarHeight = useRef(null);
  const [height, setHeight] = useState(0);
  const { loading, error, data } = useQuery(MENU_QUERY, {
    variables: { id: 'TWVudToxODc4' }
  });

  useEffect(() => {
    const navHeight = navbarHeight.current
      ? navbarHeight.current.offsetHeight
      : 0;

    setHeight(navHeight);
  }, []);

  const handleVisible = (): string =>
    isVisible ? `${componentClassName}--active` : '';

  if (loading) {
    return <span>Carregando...</span>;
  }

  return (
    <NavbarMobileWrapper
      className={`${componentClassName} ${handleVisible()}`}
      height={height}
    >
      <Container>
        <NavbarMobileList ref={navbarHeight}>
          {data &&
            data.menu &&
            data.menu.menuItems.nodes.map((item, index) => (
              <Link {...getCategoryURL(handleURL(item.url))} key={index}>
                <NavbarMobileItem
                  href={getCategoryURL(handleURL(item.url)).as}
                  aria-label={`Ir para a categoria ${item.label}`}
                >
                  {item.label}
                </NavbarMobileItem>
              </Link>
            ))}
        </NavbarMobileList>
      </Container>
    </NavbarMobileWrapper>
  );
};

export default NavbarMobile;
