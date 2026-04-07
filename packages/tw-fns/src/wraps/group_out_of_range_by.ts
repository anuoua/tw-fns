/**
 * - &:is(:where(.group):out-of-range *) {  }
 */
export const group_out_of_range_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):out-of-range *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
