import { getCategoryInfoWPAPI } from '@services/wp-api';
import { categoryTransform } from '@helpers/category/api';

const categoryResolvers = {
  Query: {
    category: async (parent, { slug }, context) => {
      const categoryData = await getCategoryInfoWPAPI({ slug });
      const treatedData = await categoryTransform(categoryData)[0];

      return treatedData;
    },
    categories: async (parent, {}, context) => {
      const categoryData = await getCategoryInfoWPAPI();
      const treatedData = await categoryTransform(categoryData);

      return treatedData;
    }
  }
};

export default categoryResolvers;
