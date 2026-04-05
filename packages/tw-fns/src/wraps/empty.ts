/**
 * - &:empty {  }
 */
export const empty = (...fns: (() => string)[]) => () => `  &:empty {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
