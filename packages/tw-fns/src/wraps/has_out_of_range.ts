/**
 * - &:has(*:out-of-range) {  }
 */
export const has_out_of_range = (...fns: (() => string)[]) => () => `  &:has(*:out-of-range) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
