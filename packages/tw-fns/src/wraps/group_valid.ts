/**
 * - &:is(:where(.group):valid *) {  }
 */
export const group_valid = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):valid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
