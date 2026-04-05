/**
 * - &:is(:where(.group):nth-child(odd) *) {  }
 */
export const group_odd_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):nth-child(odd) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
