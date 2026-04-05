/**
 * - &:has(*:first-of-type) {  }
 */
export const has_first_of_type = (...fns: (() => string)[]) => () => `  &:has(*:first-of-type) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
