/**
 * - &:is(:where(.group):last-child *) {  }
 */
export const group_last = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):last-child *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
