import {
  PostMediaAPIInterface,
  PostReviewInterface
} from '@interfaces/post/post.interface';

export interface PostScreenHeaderInterface {
  title: string;
  subtitle: string;
  media: PostMediaAPIInterface;
  date: string;
  review: PostReviewInterface;
}
