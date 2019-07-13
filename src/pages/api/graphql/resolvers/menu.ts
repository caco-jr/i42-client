import { getMenuAPI } from '@services/wp-api';

const menuResolvers = {
  Query: {
    menu(parent, { id }, context) {
      return getMenuAPI(id).then(res => res.data);
    }
  }
};

export default menuResolvers;
