/**
 * - &:is(:where(.group):first-of-type *) {  }
 */
export const group_first_of_type_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):first-of-type *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
