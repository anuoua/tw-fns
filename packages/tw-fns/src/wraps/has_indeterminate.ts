/**
 * - &:has(*:indeterminate) {  }
 */
export const has_indeterminate = (...fns: (() => string)[]) => () => `  &:has(*:indeterminate) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
