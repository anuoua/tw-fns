/**
 * - &:is(:where(.group):invalid *) {  }
 */
export const group_invalid = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):invalid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
