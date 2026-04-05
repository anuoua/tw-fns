/**
 * - &:is(:where(.group):enabled *) {  }
 */
export const group_enabled = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):enabled *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
