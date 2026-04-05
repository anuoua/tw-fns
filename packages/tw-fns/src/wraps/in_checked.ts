/**
 * - :where(*:checked) & {  }
 */
export const in_checked = (...fns: (() => string)[]) => () => `  :where(*:checked) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
