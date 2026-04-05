/**
 * - &:not(*:placeholder-shown) {  }
 */
export const not_placeholder_shown = (...fns: (() => string)[]) => () => `  &:not(*:placeholder-shown) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
