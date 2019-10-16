import { UserAPIInterface } from '@interfaces/user/user.interface';
import { CategoryAPIInterface } from '@interfaces/category/category.interface';

export interface PostAPIInterface {
  id: number;
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  featuredImage: PostMediaAPIInterface;
  author: UserAPIInterface;
  tags: PostTermAPIInterface[];
  categories: CategoryAPIInterface;
  extra: PostExtraInterface;
  podcast: PostPodcastInterface;
}

export interface PostMediaAPIInterface {
  sourceUrl: string;
  srcSet: string;
  sizes: string;
  altText: string;
}

export interface PostTermAPIInterface {
  id: number;
  name: string;
  slug: string;
}

interface PostExtraInterface {
  subtitle: string;
  rating?: number;
  readMore?: PostAPIInterface[];
}

export interface PostPodcastInterface {
  episodeParticipants: UserAPIInterface[];
  isPodcastPost: boolean;
}
