import axios from 'axios';

const _baseAPI = 'https://imperio42.com.br/wp-json';

const _wpAPI = `${_baseAPI}/wp/v2`;
const _customAPI = `${_baseAPI}/better-rest-endpoints/v1`;

interface PostsParamsWPAPI {
  context?: 'view' | 'embed' | 'edit';
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number;
  order?: 'desc' | 'asc';
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title';
  slug?: string;
  categories?: number;
  category?: string;
  categories_exclude?: number;
  tags?: number;
  tags_exclude?: number;
}

export const getMenuWPAPI = (menuSlug: string) =>
  axios.get(`${_customAPI}/menus/${menuSlug}`);

export const getPostsWPAPI = (params?: PostsParamsWPAPI) =>
  axios.get(`${_wpAPI}/posts`, {
    params: {
      ...params,
      _embed: true
    }
  });

export const getCategoryInfoWPAPI = (params?: PostsParamsWPAPI) =>
  axios.get(`${_wpAPI}/categories`, {
    params
  });
