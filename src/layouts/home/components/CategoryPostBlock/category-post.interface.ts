import { PostWPInterface } from 'interfaces/post/post-wp.interface';

export interface CategoryPostInterface {
  posts: PostWPInterface[];
  sectionTitle: string;
  categorySlug: string;
}
