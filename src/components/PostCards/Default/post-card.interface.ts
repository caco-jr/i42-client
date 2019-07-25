export interface PostCardInterface {
  className?: string;
  image: string;
  slug: string;
  title: string;
  content?: string;
  categories: CategoryInterface[];
}

interface CategoryInterface {
  id: number | string;
  name: string;
  color: string;
}
