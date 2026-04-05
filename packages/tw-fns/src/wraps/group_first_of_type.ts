/**
 * - &:is(:where(.group):first-of-type *) {  }
 */
export const group_first_of_type = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):first-of-type *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
