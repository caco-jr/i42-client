import { removeAccents } from './helpers';

export const getPostURL = (postSlug: string): string => `/p/${postSlug}`;

export const getCategoryURL = (categorySlug: string): string =>
  `/c/${removeAccents(categorySlug)
    .replace(/\s/g, '-')
    .toLowerCase()}`;
