/**
 * - &:first-child {  }
 */
export const first = (...fns: (() => string)[]) => () => `  &:first-child {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
