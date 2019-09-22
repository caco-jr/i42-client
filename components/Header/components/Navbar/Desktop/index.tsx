import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { Query, useQuery } from 'react-apollo';

import { NavbarInterface } from '../navbar.interface';
import { getCategoryURL } from '@helpers/urls';
import { NavbarWrapper, NavbarItem, NavbarLine } from './index.style';

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

const NavbarDesktop = (props: NavbarInterface) => {
  const { id = '' } = props.router.query;
  const isSelectedItem = (menuItem: string): boolean => id === menuItem;
  const { loading, error, data } = useQuery(MENU_QUERY, {
    variables: { id: 'TWVudToxODc4' }
  });

  if (loading) {
    return <span>Carregando...</span>;
  }

  return (
    <NavbarWrapper>
      {data &&
        data.menu &&
        data.menu.menuItems.nodes.map((item, index) => (
          <Link {...getCategoryURL(handleURL(item.url))} key={index}>
            <NavbarItem
              href={getCategoryURL(handleURL(item.url)).as}
              className={isSelectedItem(handleURL(item.url)) ? `is-active` : ``}
              aria-label={`Ir para a categoria ${item.label}`}
            >
              {item.label}
            </NavbarItem>
          </Link>
        ))}
      <NavbarLine />
    </NavbarWrapper>
  );
};

export default withRouter(NavbarDesktop);
