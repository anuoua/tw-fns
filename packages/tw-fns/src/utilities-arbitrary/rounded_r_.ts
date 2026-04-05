/**
 * - border-top-right-radius: ${arbitrary};
 * - border-bottom-right-radius: <value>;
 */
export const rounded_r_ = (arbitrary: string) => () => `  border-top-right-radius: ${arbitrary};
  border-bottom-right-radius: <value>;`;
