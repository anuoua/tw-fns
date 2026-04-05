/**
 * - :where(*:disabled) & {  }
 */
export const in_disabled = (...fns: (() => string)[]) => () => `  :where(*:disabled) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
