/**
 * - :where(*:placeholder-shown) & {  }
 */
export const in_placeholder_shown = (...fns: (() => string)[]) => () => `  :where(*:placeholder-shown) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
