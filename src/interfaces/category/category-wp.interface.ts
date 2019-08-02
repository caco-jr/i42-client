interface Acf {
  category_color: string;
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

interface WPPostType {
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
  ['wp:post_type']: WPPostType[];
  curies: Cury[];
}

export interface CategoryWPInterface {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  acf: Acf;
  _links: _link;
}
