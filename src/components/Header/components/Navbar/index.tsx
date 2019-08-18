import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { NavbarInterface } from './navbar.interface';
import { getCategoryURL } from '@helpers/urls';
import { NavbarWrapper, NavbarItem, NavbarLine } from './index.style';

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

const Navbar = (props: NavbarInterface) => {
  const { id = '' } = props.router.query;
  const isSelectedItem = (menuItem: string): boolean => id === menuItem;

  return (
    <NavbarWrapper>
      <Query query={menuQuery} variables={{ id: 'TWVudToxODc4' }}>
        {({ loading, data: { menu } }) => {
          if (loading) {
            return <span>Carregando...</span>;
          }

          return menu.menuItems.nodes.map((item, index) => (
            <Link {...getCategoryURL(handleURL(item.url))} key={index}>
              <NavbarItem
                href={getCategoryURL(handleURL(item.url)).as}
                className={
                  isSelectedItem(handleURL(item.url)) ? `is-active` : ``
                }
              >
                {item.label}
              </NavbarItem>
            </Link>
          ));
        }}
      </Query>

      <NavbarLine />
    </NavbarWrapper>
  );
};

export default withRouter(Navbar);
