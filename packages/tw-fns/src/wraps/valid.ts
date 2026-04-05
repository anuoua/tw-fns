/**
 * - &:valid {  }
 */
export const valid = (...fns: (() => string)[]) => () => `  &:valid {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
