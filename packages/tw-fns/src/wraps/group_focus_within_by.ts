/**
 * - &:is(:where(.group):focus-within *) {  }
 */
export const group_focus_within_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):focus-within *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
