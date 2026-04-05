/**
 * - &:has(*:active) {  }
 */
export const has_active = (...fns: (() => string)[]) => () => `  &:has(*:active) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
