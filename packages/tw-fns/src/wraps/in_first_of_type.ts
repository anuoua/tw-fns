/**
 * - :where(*:first-of-type) & {  }
 */
export const in_first_of_type = (...fns: (() => string)[]) => () => `  :where(*:first-of-type) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
