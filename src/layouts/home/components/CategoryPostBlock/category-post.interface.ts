import { PostInterface } from '../../../../interfaces/post/post.interface';

export interface CategoryPostInterface {
  posts: PostInterface[];
  sectionTitle: string;
  categorySlug: string;
}
