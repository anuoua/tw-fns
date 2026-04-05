/**
 * - &:is(:where(.group):only-child *) {  }
 */
export const group_only = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):only-child *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
