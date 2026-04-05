/**
 * - &:is(:where(.group):target *) {  }
 */
export const group_target = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):target *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
