interface Guid {
  rendered: string;
}

interface Title {
  rendered: string;
}

interface Content {
  rendered: string;
  protected: boolean;
}

interface Excerpt {
  rendered: string;
  protected: boolean;
}

interface Meta {
  spay_email: string;
  jetpack_publicize_message: string;
}

interface Acf {
  subtitle?: string;
  has_rating?: boolean;
  rating?: string;
  has_spoiler?: boolean;
  is_podcast_post?: boolean;
  episode_participants?: ACFEpisodeParticipantsWPAPIInterface[];
}

export interface ACFEpisodeParticipantsWPAPIInterface {
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

interface Self {
  href: string;
}

interface Collection {
  href: string;
}

interface About {
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Reply {
  embeddable: boolean;
  href: string;
}

interface VersionHistory {
  count: number;
  href: string;
}

interface PredecessorVersion {
  id: number;
  href: string;
}

interface WpFeaturedmedia {
  embeddable: boolean;
  href: string;
}

interface WpAttachment {
  href: string;
}

interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

interface _link {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
  ['version-history']: VersionHistory[];
  ['predecessor-version']: PredecessorVersion[];
  ['wp:featuredmedia']: WpFeaturedmedia[];
  ['wp:attachment']: WpAttachment[];
  ['wp:term']: WpTerm[];
  curies: Cury[];
}

interface Avatar_url {
  24: string;
  48: string;
  96: string;
}

interface Self {
  href: string;
}

interface Collection {
  href: string;
}

interface _link {
  self: Self[];
  collection: Collection[];
}

interface Author {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: Avatar_url;
  acf: any[];
  _links: _link;
}

interface Title {
  rendered: string;
}

interface Caption {
  rendered: string;
}

interface Thumbnail {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Medium {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Medium_large {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Large {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface PostThumbnail {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

interface Size {
  thumbnail: Thumbnail;
  medium: Medium;
  medium_large: Medium_large;
  large: Large;
  ['post-thumbnail']: PostThumbnail;
  full: Full;
}

interface Image_meta {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

interface ShortPixel {
  waitingProcessing: boolean;
}

interface Media_detail {
  width: number;
  height: number;
  file: string;
  sizes: Size;
  image_meta: Image_meta;
  shortPixel: ShortPixel;
}

interface Self {
  href: string;
}

interface Collection {
  href: string;
}

interface About {
  href: string;
}

interface Author {
  embeddable: boolean;
  href: string;
}

interface Reply {
  embeddable: boolean;
  href: string;
}

interface _link {
  self: Self[];
  collection: Collection[];
  about: About[];
  author: Author[];
  replies: Reply[];
}

interface WpFeaturedmedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: Title;
  author: number;
  acf: WpFeaturedmediaACF;
  jetpack_shortlink: string;
  caption: Caption;
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: Media_detail;
  source_url: string;
  _links: _link;
}

interface WpFeaturedmediaACF {
  category_color: string;
}

export interface TermACF {
  category_color: string;
}

export interface TermSelf {
  href: string;
}

export interface TermCollection {
  href: string;
}

export interface TermAbout {
  href: string;
}

export interface TermPostType {
  href: string;
}

export interface TermCury {
  name: string;
  href: string;
  templated: boolean;
}

export interface TermLink {
  self: TermSelf[];
  collection: TermCollection[];
  about: TermAbout[];
  ['wp: post_type']: TermPostType[];
  curies: TermCury[];
}

export interface TermPost {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  acf?: TermACF;
  _links: TermLink;
}

interface _embedded {
  author: Author[];
  ['wp:featuredmedia']: WpFeaturedmedia[];
  ['wp:term']: TermPost[][];
}

export interface PostWPInterface {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Title;
  content: Content;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Meta;
  categories: number[];
  tags: number[];
  jetpack_featured_media_url: string;
  jetpack_publicize_connections: any[];
  acf?: Acf;
  jetpack_shortlink: string;
  _links: _link;
  _embedded: _embedded;
}
