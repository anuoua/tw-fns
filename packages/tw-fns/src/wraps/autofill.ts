/**
 * - &:autofill {  }
 */
export const autofill = (...fns: (() => string)[]) => () => `  &:autofill {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
