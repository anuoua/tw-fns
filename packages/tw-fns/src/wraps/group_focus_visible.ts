/**
 * - &:is(:where(.group):focus-visible *) {  }
 */
export const group_focus_visible = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):focus-visible *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
