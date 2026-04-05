/**
 * - :where(*:empty) & {  }
 */
export const in_empty = (...fns: (() => string)[]) => () => `  :where(*:empty) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
