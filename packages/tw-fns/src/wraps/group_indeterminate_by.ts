/**
 * - &:is(:where(.group):indeterminate *) {  }
 */
export const group_indeterminate_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):indeterminate *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
