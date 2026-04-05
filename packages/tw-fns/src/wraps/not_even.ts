/**
 * - &:not(*:nth-child(even)) {  }
 */
export const not_even = (...fns: (() => string)[]) => () => `  &:not(*:nth-child(even)) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
