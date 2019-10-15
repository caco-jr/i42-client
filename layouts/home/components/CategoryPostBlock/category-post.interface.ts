export interface CategoryPostInterface {
  title: CategoryPostTitleInterface;
  categorySlug: string;
  postsExclude: number[];
  postQuantity: number;
}

interface CategoryPostTitleInterface {
  normal: string;
  highlighted: string;
  color: string;
}
