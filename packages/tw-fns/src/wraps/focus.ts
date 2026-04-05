/**
 * - &:focus {  }
 */
export const focus = (...fns: (() => string)[]) => () => `  &:focus {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
