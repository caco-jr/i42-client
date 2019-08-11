const categoryResolvers = {
  Query: {
    category: async (parent, { slug }, { dataSources }) =>
      dataSources.wpAPI.getCategoryInfoWPAPI({ slug })[0],
    categories: async (parent, {}, { dataSources }) =>
      dataSources.wpAPI.getCategoryInfoWPAPI()
  }
};

export default categoryResolvers;
