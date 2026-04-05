/**
 * - &:nth-child(even) {  }
 */
export const even = (...fns: (() => string)[]) => () => `  &:nth-child(even) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
