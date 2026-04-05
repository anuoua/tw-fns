/**
 * - &:in-range {  }
 */
export const in_range = (...fns: (() => string)[]) => () => `  &:in-range {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
