import { getPostsAPI } from '@services/wp-api';
import { postsTransform } from '@helpers/api';

const postResolvers = {
  Query: {
    async posts(parent, args, context) {
      const postData = await getPostsAPI();
      const treatedData = await postsTransform(postData.data);

      return treatedData;
    }
  }
};

export default postResolvers;
