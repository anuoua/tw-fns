/**
 * - &:has(*:optional) {  }
 */
export const has_optional = (...fns: (() => string)[]) => () => `  &:has(*:optional) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
