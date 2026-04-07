/**
 * - &:is(:where(.group):placeholder-shown *) {  }
 */
export const group_placeholder_shown_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):placeholder-shown *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
