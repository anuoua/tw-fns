/**
 * - &:is(:where(.group):focus-visible *) {  }
 */
export const group_focus_visible_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):focus-visible *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
