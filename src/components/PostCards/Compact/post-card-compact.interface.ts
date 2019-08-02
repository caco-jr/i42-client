export interface PostCardCompactInterface {
  className?: string;
  image: string;
  slug: string;
  title: string;
  categories: CategoryInterface[];
  width?: number;
  height?: number;
}

interface CategoryInterface {
  slug: string;
  name: string;
  color: string;
}
