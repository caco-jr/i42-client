import { PostWPInterface } from '@interfaces/post/post-wp.interface';

interface MediaPostInterface {
  thumbnail: string;
}

interface AuthorPostInterface {
  id: number;
  name: string;
  avatar_url: string;
}

interface TermPostInterface {
  id: number;
  name: string;
  slug: string;
}

export interface PostACFInterface {
  subtitle?: string;
  has_rating?: boolean;
  rating?: string;
  has_spoiler?: boolean;
  is_podcast_post?: boolean;
  episode_participants?: ACFEpisodeParticipantsInterface[];
}

export interface ACFEpisodeParticipantsInterface {
  ID: number;
  display_name: string;
  nickname: string;
  user_avatar: string;
  user_description: string;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_nicename: string;
  user_registered: string;
  user_url: string;
}

interface PostInterface {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  content: string;
  excerpt: string;
  media: MediaPostInterface;
  author: AuthorPostInterface;
  tags: TermPostInterface[];
  categories: TermPostInterface[];
  acf: PostACFInterface;
}

export const postsTransform = (posts: PostWPInterface[]): PostInterface[] => {
  return posts.map(post => {
    const {
      id,
      date,
      modified,
      slug,
      title,
      content,
      excerpt,
      _embedded,
      jetpack_featured_media_url,
      acf
    } = post;

    return {
      id,
      date,
      date_modified: modified,
      slug,
      title: title.rendered,
      acf: {
        subtitle: acf.subtitle || ''
      },
      content: content.rendered,
      excerpt: excerpt.rendered,
      media: {
        thumbnail: jetpack_featured_media_url
      },
      author: {
        id: _embedded.author[0].id,
        name: _embedded.author[0].name,
        avatar_url: _embedded.author[0].avatar_urls[96]
      },
      tags: _embedded['wp:term'][1].map(tag => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug
      })),
      categories: _embedded['wp:term'][0].map(category => ({
        id: category.id,
        name: category.name,
        slug: category.slug
      }))
    };
  });
};
