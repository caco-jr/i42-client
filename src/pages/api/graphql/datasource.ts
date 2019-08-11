import { RESTDataSource } from 'apollo-datasource-rest';
import { postsTransform } from '@helpers/post/api';
import { categoryTransform } from '@helpers/category/api';

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

export class WpAPI extends RESTDataSource {
  _baseAPI = 'https://imperio42.com.br/wp-json';
  _wpAPI = `/wp/v2`;
  _customAPI = `/better-rest-endpoints/v1`;

  _totalCount = 1;
  _totalPages = 1;

  constructor() {
    super();

    this.baseURL = this._baseAPI;
  }

  async didReceiveResponse(response) {
    const headersTotal = response.headers.get('x-wp-total');
    const headersTotalPages = response.headers.get('x-wp-totalpages');

    const body = await response.json();

    this._totalCount = headersTotal;
    this._totalPages = headersTotalPages;

    return body;
  }

  handleParams = params => {
    if (!params) {
      return null;
    }

    return params;
  };

  async getMenuWPAPI(menuSlug: string) {
    return this.get(`${this._customAPI}/menus/${menuSlug}`, null, {
      cacheOptions: { ttl: 60 * 60 * 24 * 90 }
    });
  }

  async getPostsWPAPI(params?: PostsParamsWPAPI) {
    const result = await this.get(
      `${this._wpAPI}/posts`,
      this.handleParams({
        ...params,
        _embed: true
      }),
      {
        cacheOptions: { ttl: 60 * 60 * 12 }
      }
    );

    const treatedData = await postsTransform(result);

    return {
      posts: treatedData,
      totalCount: this._totalCount,
      totalPages: this._totalPages
    };
  }

  async getCategoryInfoWPAPI(params?: PostsParamsWPAPI) {
    const result = await this.get(
      `${this._wpAPI}/categories`,
      this.handleParams(params),
      {
        cacheOptions: { ttl: 60 * 60 * 24 * 30 }
      }
    );

    const treatedData = await categoryTransform(result);

    return treatedData;
  }
}
