/**
 * - &:has(*:invalid) {  }
 */
export const has_invalid = (...fns: (() => string)[]) => () => `  &:has(*:invalid) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
