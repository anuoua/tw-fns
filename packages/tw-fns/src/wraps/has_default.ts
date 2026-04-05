/**
 * - &:has(*:default) {  }
 */
export const has_default = (...fns: (() => string)[]) => () => `  &:has(*:default) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
