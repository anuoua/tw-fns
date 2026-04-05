/**
 * - :where(*:indeterminate) & {  }
 */
export const in_indeterminate = (...fns: (() => string)[]) => () => `  :where(*:indeterminate) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
