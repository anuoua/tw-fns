/**
 * - :where(*:invalid) & {  }
 */
export const in_invalid = (...fns: (() => string)[]) => () => `  :where(*:invalid) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
