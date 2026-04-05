/**
 * - :where(*:target) & {  }
 */
export const in_target = (...fns: (() => string)[]) => () => `  :where(*:target) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
