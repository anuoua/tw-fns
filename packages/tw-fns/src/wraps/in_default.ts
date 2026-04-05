/**
 * - :where(*:default) & {  }
 */
export const in_default = (...fns: (() => string)[]) => () => `  :where(*:default) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
