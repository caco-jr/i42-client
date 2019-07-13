import { getPostsWPAPI } from '@services/wp-api';
import { postsTransform } from '@helpers/api';

const postResolvers = {
  Query: {
    async posts(parent, args, context) {
      const postData = await getPostsWPAPI();
      const treatedData = await postsTransform(postData.data);

      return treatedData;
    }
  }
};

export default postResolvers;
