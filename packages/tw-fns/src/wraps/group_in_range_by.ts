/**
 * - &:is(:where(.group):in-range *) {  }
 */
export const group_in_range_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):in-range *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
