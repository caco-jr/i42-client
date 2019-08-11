import { gql } from 'apollo-server-micro';

const postSchema = gql`
  extend type Query {
    post(slug: String!): PostsResult
    allPosts(categoriesExclude: [Int], limit: Int, page: Int): PostsResult
    postsByCategory(ID: Int!, limit: Int, page: Int): PostsResult
    searchPosts(term: String!, limit: Int, page: Int): PostsResult
  }

  type PostsResult {
    posts: [Post!]!
    totalCount: Int
    totalPages: Int
  }

  type Post {
    id: Int!
    title: String
    slug: String
    date: String
    date_modified: String
    content: String
    excerpt: String
    media: MediaPost
    author: AuthorPost
    tags: [TermPost]
    categories: [CategoryPost]
    acf: ACFPost
  }

  type MediaPost {
    thumbnail: String
  }

  type AuthorPost {
    id: Int
    name: String
    avatar_url: String
  }

  type TermPost {
    id: Int
    name: String
    slug: String
  }

  type CategoryPost {
    id: Int
    name: String
    slug: String
    color: String
  }

  type ACFPost {
    subtitle: String
    has_rating: Boolean
    rating: String
    has_spoiler: Boolean
    is_podcast_post: Boolean
    episode_participants: [EpisodeParticipantsACF]
  }

  type EpisodeParticipantsACF {
    id: Int
    first_name: String
    last_name: String
    display_name: String
    description: String
    avatar: String
  }
`;

export default postSchema;
