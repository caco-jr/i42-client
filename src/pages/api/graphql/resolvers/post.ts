import { getPostsWPAPI } from '@services/wp-api';
import { postsTransform } from '@helpers/api';

const postResolvers = {
  Query: {
    async post(parent, { slug }, context) {
      const postData = await getPostsWPAPI({
        slug
      });
      const treatedData = await postsTransform(postData.data)[0];

      return treatedData;
    },
    async posts(parent, args, context) {
      const postData = await getPostsWPAPI();
      const treatedData = await postsTransform(postData.data);

      return treatedData;
    },
    async postsByCategory(parent, { category, limit = 6, page = 1 }, context) {
      const postData = await getPostsWPAPI({
        categories: category,
        per_page: limit,
        page
      });
      const treatedData = await postsTransform(postData.data);

      return treatedData;
    }
  }
};

export default postResolvers;
