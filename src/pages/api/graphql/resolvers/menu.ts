import { getMenuWPAPI } from '@services/wp-api';

const menuResolvers = {
  Query: {
    menu(parent, { id }, context) {
      return getMenuWPAPI(id).then(res => res.data);
    }
  }
};

export default menuResolvers;
