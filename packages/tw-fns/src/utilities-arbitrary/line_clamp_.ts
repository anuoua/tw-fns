/**
 * - overflow: hidden;
 * - display: -webkit-box;
 * - -webkit-box-orient: vertical;
 * - -webkit-line-clamp: ${arbitrary};
 */
export const line_clamp_ = (arbitrary: string) => () => `  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${arbitrary};`;
