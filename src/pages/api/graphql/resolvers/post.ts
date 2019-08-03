import { getPostsWPAPI } from '@services/wp-api';
import { postsTransform } from '@helpers/post/api';

const postResolvers = {
  Query: {
    post: async (parent, { slug }, context) => {
      const postData = await getPostsWPAPI({
        slug
      });
      const treatedData = await postsTransform(postData)[0];

      return treatedData;
    },
    allPosts: async (
      parent,
      { categoriesExclude = [], limit = 6, page = 1 },
      context
    ) => {
      const postData = await getPostsWPAPI({
        categories_exclude: categoriesExclude,
        per_page: limit,
        page
      });

      const treatedData = await postsTransform(postData);

      return treatedData;
    },
    postsByCategory: async (parent, { ID, limit = 6, page = 1 }, context) => {
      const postData = await getPostsWPAPI({
        categories: ID,
        per_page: limit,
        page
      });
      const treatedData = await postsTransform(postData);

      return treatedData;
    },
    searchPosts: async (parent, { term, limit = 9, page = 1 }, context) => {
      const postData = await getPostsWPAPI({
        search: term,
        per_page: limit,
        page
      });

      const treatedData = await postsTransform(postData);

      return treatedData;
    }
  }
};

export default postResolvers;
