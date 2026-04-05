/**
 * - &:is(:where(.group):nth-child(even) *) {  }
 */
export const group_even_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):nth-child(even) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
