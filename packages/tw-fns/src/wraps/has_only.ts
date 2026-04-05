/**
 * - &:has(*:only-child) {  }
 */
export const has_only = (...fns: (() => string)[]) => () => `  &:has(*:only-child) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
