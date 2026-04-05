/**
 * - &:has(*:is(${arbitrary})) {  }
 */
export const has = (arbitrary: string, ...fns: (() => string)[]) => () => `  &:has(*:is(${arbitrary})) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
