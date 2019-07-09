export interface PostInterface {
  author: string;
  author_id: number;
  author_nicename: string;
  date: string;
  date_modified: string;
  excerpt: string;
  id: number;
  media: PostMediaInterface;
  permalink: string;
  slug: string;
  title: string;
  category_names?: string[];
  category_ids?: number[];
  tag_names?: string[];
  tag_ids?: number[];
  content?: string;
  acf: PostACFInterface | null;
  terms?: TermInterface[];
}

interface PostMediaInterface {
  thumbnail: string;
  medium: string;
  medium_large: string;
  large: string;
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

interface TermInterface {
  count: number;
  description: string;
  filter: string;
  name: string;
  parent: number;
  slug: string;
  taxonomy: string;
  term_group: number;
  term_id: number;
  term_taxonomy_id: number;
}
