/**
 * - &:is(:where(.group):only-of-type *) {  }
 */
export const group_only_of_type = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):only-of-type *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
