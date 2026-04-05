/**
 * - &:is(:where(.group):optional *) {  }
 */
export const group_optional = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):optional *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
