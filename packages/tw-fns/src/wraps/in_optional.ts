/**
 * - :where(*:optional) & {  }
 */
export const in_optional = (...fns: (() => string)[]) => () => `  :where(*:optional) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
