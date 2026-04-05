/**
 * - &:has(*:autofill) {  }
 */
export const has_autofill = (...fns: (() => string)[]) => () => `  &:has(*:autofill) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
