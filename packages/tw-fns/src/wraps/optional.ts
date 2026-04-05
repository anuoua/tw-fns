/**
 * - &:optional {  }
 */
export const optional = (...fns: (() => string)[]) => () => `  &:optional {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
