/**
 * - &:is(:where(.group):empty *) {  }
 */
export const group_empty = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):empty *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
