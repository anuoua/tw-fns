/**
 * - &:has(*:enabled) {  }
 */
export const has_enabled = (...fns: (() => string)[]) => () => `  &:has(*:enabled) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
