export interface CategoryAPIInterface {
  nodes: CategoryItemAPIInterface[];
}

export interface CategoryItemAPIInterface {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  extra: CategoryExtraAPIInterface;
}

interface CategoryExtraAPIInterface {
  categoryColor: string;
}
