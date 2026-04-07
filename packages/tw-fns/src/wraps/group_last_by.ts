/**
 * - &:is(:where(.group):last-child *) {  }
 */
export const group_last_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):last-child *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
