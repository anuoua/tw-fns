/**
 * - &:not(*:checked) {  }
 */
export const not_checked = (...fns: (() => string)[]) => () => `  &:not(*:checked) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
