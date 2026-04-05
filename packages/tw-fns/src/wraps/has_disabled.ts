/**
 * - &:has(*:disabled) {  }
 */
export const has_disabled = (...fns: (() => string)[]) => () => `  &:has(*:disabled) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
