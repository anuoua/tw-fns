/**
 * - &:not(*:empty) {  }
 */
export const not_empty = (...fns: (() => string)[]) => () => `  &:not(*:empty) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
