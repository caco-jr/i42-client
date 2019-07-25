import fetch from 'isomorphic-unfetch';

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
  categories_exclude?: number[];
  tags?: number;
  tags_exclude?: number[];
}

const handleParams = params => {
  return new URLSearchParams(Object.entries(params));
};

export const getMenuWPAPI = (menuSlug: string) =>
  fetch(`${_customAPI}/menus/${menuSlug}`).then(res => res.json());

export const getPostsWPAPI = (params?: PostsParamsWPAPI) =>
  fetch(
    `${_wpAPI}/posts?${handleParams({
      ...params,
      _embed: true
    })}`
  ).then(res => res.json());

export const getCategoryInfoWPAPI = (params?: PostsParamsWPAPI) =>
  fetch(`${_wpAPI}/categories?${handleParams(params)}`).then(res => res.json());
