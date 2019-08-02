import { PostACFAPIInterface } from '@interfaces/post/post.interface';

export interface PostScreenHeaderInterface {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  acf: null | PostACFAPIInterface;
}
