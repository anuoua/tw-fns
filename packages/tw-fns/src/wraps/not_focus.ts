/**
 * - &:not(*:focus) {  }
 */
export const not_focus = (...fns: (() => string)[]) => () => `  &:not(*:focus) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
