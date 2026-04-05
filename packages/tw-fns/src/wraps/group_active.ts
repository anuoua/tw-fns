/**
 * - &:is(:where(.group):active *) {  }
 */
export const group_active = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):active *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
