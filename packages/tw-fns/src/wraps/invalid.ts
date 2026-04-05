/**
 * - &:invalid {  }
 */
export const invalid = (...fns: (() => string)[]) => () => `  &:invalid {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
