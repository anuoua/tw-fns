/**
 * - &:is(:where(.group):active *) {  }
 */
export const group_active_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):active *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
