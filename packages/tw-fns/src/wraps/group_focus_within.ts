/**
 * - &:is(:where(.group):focus-within *) {  }
 */
export const group_focus_within = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):focus-within *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
