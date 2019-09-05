import { removeAccents } from './helpers';

export const getPostURL = (postSlug: string): { href: string; as: string } => ({
  href: `/p/[id]`,
  as: `/p/${postSlug}`
});

export const getCategoryURL = (
  categorySlug: string
): { href: string; as: string } => ({
  href: `/c/[id]`,
  as: `/c/${removeAccents(categorySlug)
    .replace(/\s/g, '-')
    .toLowerCase()}`
});
