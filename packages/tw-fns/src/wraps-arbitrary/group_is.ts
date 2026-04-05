/**
 * - &:is(:where([aria-group]):is(${arbitrary}) *) {  }
 */
export const group_is = (arbitrary: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):is(${arbitrary}) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
