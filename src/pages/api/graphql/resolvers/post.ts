const postResolvers = {
  Query: {
    post: async (parent, { slug }, { dataSources }) =>
      dataSources.wpAPI.getPostsWPAPI({
        slug
      }),
    allPosts: async (
      parent,
      { categoriesExclude = [], limit = 6, page = 1 },
      { dataSources }
    ) =>
      dataSources.wpAPI.getPostsWPAPI({
        categories_exclude: categoriesExclude,
        per_page: limit,
        page
      }),
    postsByCategory: async (
      parent,
      { ID, limit = 6, page = 1 },
      { dataSources }
    ) =>
      dataSources.wpAPI.getPostsWPAPI({
        categories: ID,
        per_page: limit,
        page
      }),
    searchPosts: async (
      parent,
      { term, limit = 6, page = 1 },
      { dataSources }
    ) =>
      dataSources.wpAPI.getPostsWPAPI({
        search: term,
        per_page: limit,
        page
      })
  }
};

export default postResolvers;
