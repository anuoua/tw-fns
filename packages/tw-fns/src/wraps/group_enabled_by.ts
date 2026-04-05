/**
 * - &:is(:where(.group):enabled *) {  }
 */
export const group_enabled_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):enabled *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
