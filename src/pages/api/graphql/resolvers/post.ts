import { getPostsWPAPI } from '@services/wp-api';
import { postsTransform } from '@helpers/api';

const postResolvers = {
  Query: {
    async post(parent, { slug }, context) {
      const postData = await getPostsWPAPI({
        slug
      });
      const treatedData = await postsTransform(postData)[0];

      return treatedData;
    },
    async allPosts(parent, args, context) {
      const postData = await getPostsWPAPI();
      const treatedData = await postsTransform(postData);

      return treatedData;
    },
    async postsByCategory(parent, { ID, limit = 6, page = 1 }, context) {
      const postData = await getPostsWPAPI({
        categories: ID,
        per_page: limit,
        page
      });
      const treatedData = await postsTransform(postData);

      return treatedData;
    }
  }
};

export default postResolvers;
