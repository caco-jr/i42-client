import { CategoryWPInterface } from '@interfaces/category/category-wp.interface';
import { CategoryAPIInterface } from '@interfaces/category/category.interface';

export const categoryTransform = (
  categories: CategoryWPInterface[]
): CategoryAPIInterface[] => {
  return categories.map(category => {
    const { id, count, description, name, slug, acf } = category;
    return {
      id,
      count,
      description,
      name,
      slug,
      color: acf.category_color
    };
  });
};
