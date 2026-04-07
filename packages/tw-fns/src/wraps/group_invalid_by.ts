/**
 * - &:is(:where(.group):invalid *) {  }
 */
export const group_invalid_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):invalid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
