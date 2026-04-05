/**
 * - &:is(:where(.group):out-of-range *) {  }
 */
export const group_out_of_range = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):out-of-range *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
