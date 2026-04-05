/**
 * - width: ${arbitrary};
 * - height: <value>;
 */
export const size_ = (arbitrary: string) => () => `  width: ${arbitrary};
  height: <value>;`;
