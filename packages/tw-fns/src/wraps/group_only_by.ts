/**
 * - &:is(:where(.group):only-child *) {  }
 */
export const group_only_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):only-child *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
