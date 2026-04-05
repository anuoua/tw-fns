/**
 * - :where(*:last-of-type) & {  }
 */
export const in_last_of_type = (...fns: (() => string)[]) => () => `  :where(*:last-of-type) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
