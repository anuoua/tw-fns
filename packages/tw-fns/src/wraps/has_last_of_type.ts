/**
 * - &:has(*:last-of-type) {  }
 */
export const has_last_of_type = (...fns: (() => string)[]) => () => `  &:has(*:last-of-type) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
