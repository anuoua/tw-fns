/**
 * - :where(*:first-child) & {  }
 */
export const in_first = (...fns: (() => string)[]) => () => `  :where(*:first-child) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
