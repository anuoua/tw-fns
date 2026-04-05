/**
 * - &:is(:where(.group):checked *) {  }
 */
export const group_checked = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):checked *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
