/**
 * - &:has(*:first-child) {  }
 */
export const has_first = (...fns: (() => string)[]) => () => `  &:has(*:first-child) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
