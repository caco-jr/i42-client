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
  episode_participants?: ACFEpisodeParticipantsAPIInterface[];
}

export interface ACFEpisodeParticipantsAPIInterface {
  id: number;
  first_name: string;
  last_name: string;
  display_name: string;
  description: string;
  avatar: string;
}
