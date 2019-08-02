export interface PostCardInterface {
  className?: string;
  image: string;
  slug: string;
  title: string;
  content?: string;
  categories: CategoryInterface[];
}

interface CategoryInterface {
  slug: string;
  name: string;
  color: string;
}
