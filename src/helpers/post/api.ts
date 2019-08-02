import {
  PostWPInterface,
  ACFEpisodeParticipantsWPAPIInterface
} from '@interfaces/post/post-wp.interface';
import {
  PostAPIInterface,
  PostACFAPIInterface,
  TermPostAPIInterface,
  CategoryPostAPIInterface
} from '@interfaces/post/post.interface';

const handleACF = ({
  subtitle = '',
  has_rating = false,
  rating = '',
  has_spoiler = false,
  is_podcast_post = false,
  episode_participants = [] as ACFEpisodeParticipantsWPAPIInterface[]
}): PostACFAPIInterface => ({
  subtitle,
  has_rating,
  rating,
  has_spoiler,
  is_podcast_post,
  episode_participants: episode_participants.map(participant => ({
    id: participant.ID,
    first_name: participant.user_firstname,
    last_name: participant.user_lastname,
    display_name: participant.display_name,
    description: participant.user_description,
    avatar: participant.user_avatar
  }))
});

const handleTags = (tags): TermPostAPIInterface[] =>
  tags.map(tag => ({
    id: tag.id,
    name: tag.name,
    slug: tag.slug
  }));

const handleCategories = (categories): CategoryPostAPIInterface[] =>
  categories.map(category => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    color: category.acf.category_color
  }));

export const postsTransform = (
  posts: PostWPInterface[]
): PostAPIInterface[] => {
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
      acf: handleACF(acf),
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
      tags: handleTags(_embedded['wp:term'][1]),
      categories: handleCategories(_embedded['wp:term'][0])
    };
  });
};
