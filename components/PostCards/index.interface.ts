import { CategoryAPIInterface } from '@interfaces/category/category.interface';

export interface BasePostCardInterface {
  className?: string;
  media: MediaInterface;
  slug: string;
  title: string;
  content?: string;
  categories?: CategoryAPIInterface;
}

interface MediaInterface {
  sourceUrl: string;
  altText: string;
}
