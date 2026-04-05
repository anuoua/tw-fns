/**
 * - :where(*:focus) & {  }
 */
export const in_focus = (...fns: (() => string)[]) => () => `  :where(*:focus) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
