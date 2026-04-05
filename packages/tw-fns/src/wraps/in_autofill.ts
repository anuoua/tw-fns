/**
 * - :where(*:autofill) & {  }
 */
export const in_autofill = (...fns: (() => string)[]) => () => `  :where(*:autofill) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
