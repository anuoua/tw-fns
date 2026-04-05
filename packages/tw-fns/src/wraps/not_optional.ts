/**
 * - &:not(*:optional) {  }
 */
export const not_optional = (...fns: (() => string)[]) => () => `  &:not(*:optional) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
