/**
 * - &:is(:where(.group):last-of-type *) {  }
 */
export const group_last_of_type_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):last-of-type *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
