export interface HighlightBlockInterface {
  title: HighlightBlockTitleInterface;
  categorySlug: string;
  postsExclude: number[];
}

interface HighlightBlockTitleInterface {
  normal: string;
  highlighted?: string;
  color?: string;
}
