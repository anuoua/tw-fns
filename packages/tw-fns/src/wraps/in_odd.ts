/**
 * - :where(*:nth-child(odd)) & {  }
 */
export const in_odd = (...fns: (() => string)[]) => () => `  :where(*:nth-child(odd)) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
