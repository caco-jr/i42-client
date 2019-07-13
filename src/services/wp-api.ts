import axios from 'axios';

const _baseAPI = 'https://imperio42.com.br/wp-json';

const _wpAPI = `${_baseAPI}/wp/v2`;
const _customAPI = `${_baseAPI}/better-rest-endpoints/v1`;

export const getMenuAPI = (menuSlug: string) =>
  axios.get(`${_customAPI}/menus/${menuSlug}`);

export const getPostAPI = (slug: string) =>
  axios.get(`${_wpAPI}/posts?slug=${slug}`);

export const getPostsAPI = () => axios.get(`${_wpAPI}/posts?_embed`);
