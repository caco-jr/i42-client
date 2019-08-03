import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { NavbarInterface } from './navbar.interface';
import { getCategoryURL } from '@helpers/urls';
import { NavbarWrapper, NavbarItem, NavbarLine } from './index.style';

const menuQuery = gql`
  query menu($id: String!) {
    menu(id: $id) {
      slug
      title
    }
  }
`;

const Navbar = (props: NavbarInterface) => {
  const { id = '' } = props.router.query;
  const isSelectedItem = (menuItem: string): boolean => id === menuItem;

  return (
    <NavbarWrapper>
      <Query query={menuQuery} variables={{ id: 'principal' }}>
        {({ loading, data: { menu } }) => {
          if (loading) {
            return <span>Carregando...</span>;
          }

          return menu.map((item, index) => (
            <Link {...getCategoryURL(item.slug)} key={index}>
              <NavbarItem active={isSelectedItem(item.slug)}>
                {item.title}
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
