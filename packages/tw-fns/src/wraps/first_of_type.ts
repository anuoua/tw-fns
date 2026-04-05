/**
 * - &:first-of-type {  }
 */
export const first_of_type = (...fns: (() => string)[]) => () => `  &:first-of-type {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
