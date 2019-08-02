const CATEGORIES = [
  { id: 4, slug: 'cinema' },
  { id: 1, slug: 'controle-missao' },
  { id: 11, slug: 'games' },
  { id: 141, slug: 'imperialista' },
  { id: 806, slug: 'mes-do-horror' },
  { id: 3, slug: 'nave-mainha' },
  { id: 2, slug: 'noticias-cinema' },
  { id: 1905, slug: 'noticias-games' },
  { id: 1906, slug: 'noticias-series' },
  { id: 416, slug: 'raio-x' },
  { id: 304, slug: 'retrovision' },
  { id: 132, slug: 'reviews-cinema' },
  { id: 1907, slug: 'reviews-series' },
  { id: 1908, slug: 'reviews-games' },
  { id: 1903, slug: 'series' }
];

export const getCategoryIDBySlug = (slug: string | string[]): number =>
  CATEGORIES.find(category => category.slug === slug).id;
