import { PostMediaAPIInterface } from '@interfaces/post/post.interface';

export interface PostScreenHeaderInterface {
  title: string;
  subtitle: string;
  media: PostMediaAPIInterface;
  date: string;
  rating: number;
}
