/**
 * - &:last-child {  }
 */
export const last = (...fns: (() => string)[]) => () => `  &:last-child {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
