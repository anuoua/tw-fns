/**
 * - & > :not(:last-child) {
 * -   border-color: ${arbitrary};
 * - }
 */
export const divide_ = (arbitrary: string) => () => `  & > :not(:last-child) {
    border-color: ${arbitrary};
  }`;
