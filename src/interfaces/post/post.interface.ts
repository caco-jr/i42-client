export interface PostInterface {
  id: number;
  title: string;
  slug: string;
  date: string;
  date_modified: string;
  content: string;
  excerpt: string;
  media: MediaPost;
  author: AuthorPost;
  tags: [TermPost];
  categories: [CategoryPost];
  acf: ACFPost;
}

interface MediaPost {
  thumbnail: string;
}

interface AuthorPost {
  id: number;
  name: string;
  avatar_url: string;
}

interface TermPost {
  id: number;
  name: string;
  slug: string;
}

interface CategoryPost {
  id: number;
  name: string;
  slug: string;
  color: string;
}

interface ACFPost {
  subtitle: string;
  has_rating: boolean;
  rating: string;
  has_spoiler: boolean;
  is_podcast_post: boolean;
}
