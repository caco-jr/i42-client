import React, { useRef, useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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

const menuQuery = gql`
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

  useEffect(() => {
    const navHeight = navbarHeight.current
      ? navbarHeight.current.offsetHeight
      : 0;

    setHeight(navHeight);
  }, []);

  const handleVisible = (): string =>
    isVisible ? `${componentClassName}--active` : '';

  return (
    <NavbarMobileWrapper
      className={`${componentClassName} ${handleVisible()}`}
      height={height}
    >
      <Container>
        <NavbarMobileList ref={navbarHeight}>
          <Query query={menuQuery} variables={{ id: 'TWVudToxODc4' }}>
            {({ loading, data: { menu } }) => {
              if (loading) {
                return <span>Carregando...</span>;
              }

              return menu.menuItems.nodes.map((item, index) => (
                <Link {...getCategoryURL(handleURL(item.url))} key={index}>
                  <NavbarMobileItem
                    href={getCategoryURL(handleURL(item.url)).as}
                    aria-label={`Ir para a categoria ${item.label}`}
                  >
                    {item.label}
                  </NavbarMobileItem>
                </Link>
              ));
            }}
          </Query>
        </NavbarMobileList>
      </Container>
    </NavbarMobileWrapper>
  );
};

export default NavbarMobile;
