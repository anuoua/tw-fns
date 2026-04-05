/**
 * - &:is(:where([aria-group="${name}"]):is(${arbitrary}) *) {  }
 */
export const group_is_by = (arbitrary: string, name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):is(${arbitrary}) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
