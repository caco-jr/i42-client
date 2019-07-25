export interface PostAPIInterface {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  content: string;
  excerpt: string;
  media: MediaPostAPIInterface;
  author: AuthorPostAPIInterface;
  tags: TermPostAPIInterface[];
  categories: CategoryPostAPIInterface[];
  acf?: PostACFAPIInterface;
}

interface MediaPostAPIInterface {
  thumbnail: string;
}

interface AuthorPostAPIInterface {
  id: number;
  name: string;
  avatar_url: string;
}

export interface TermPostAPIInterface {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryPostAPIInterface {
  id: number;
  name: string;
  slug: string;
  color: string;
}

export interface PostACFAPIInterface {
  subtitle?: string;
  has_rating?: boolean;
  rating?: string;
  has_spoiler?: boolean;
  is_podcast_post?: boolean;
  episode_participants?: ACFEpisodeParticipantsInterface[];
}

interface ACFEpisodeParticipantsInterface {
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
