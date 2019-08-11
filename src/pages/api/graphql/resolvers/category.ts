const categoryResolvers = {
  Query: {
    category: async (parent, { slug }, { dataSources }) => {
      const result = await dataSources.wpAPI.getCategoryInfoWPAPI({ slug });

      return result[0];
    },
    categories: async (parent, {}, { dataSources }) =>
      dataSources.wpAPI.getCategoryInfoWPAPI()
  }
};

export default categoryResolvers;
