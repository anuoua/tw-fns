/**
 * - &:not(*:only-of-type) {  }
 */
export const not_only_of_type = (...fns: (() => string)[]) => () => `  &:not(*:only-of-type) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
