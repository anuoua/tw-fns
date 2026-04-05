/**
 * - :where(*:nth-child(even)) & {  }
 */
export const in_even = (...fns: (() => string)[]) => () => `  :where(*:nth-child(even)) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
