/**
 * - &:only-of-type {  }
 */
export const only_of_type = (...fns: (() => string)[]) => () => `  &:only-of-type {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
