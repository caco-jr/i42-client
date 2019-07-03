import { PostInterface } from '../../../../interfaces/post/post.interface';
import { RouteComponentProps, StaticContext } from 'react-router';

export interface CategoryPostInterface
  extends RouteComponentProps<any, StaticContext, any> {
  posts: PostInterface[];
  sectionTitle: string;
  categorySlug: string;
}
