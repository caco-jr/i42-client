const menuResolvers = {
  Query: {
    menu: (parent, { id }, { dataSources }) =>
      dataSources.wpAPI.getMenuWPAPI(id)
  }
};

export default menuResolvers;
