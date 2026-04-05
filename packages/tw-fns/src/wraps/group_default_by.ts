/**
 * - &:is(:where(.group):default *) {  }
 */
export const group_default_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):default *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
