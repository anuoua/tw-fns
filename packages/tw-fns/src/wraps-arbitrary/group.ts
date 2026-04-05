/**
 * - &:is(:where([aria-group]) *) {  }
 */
export const group = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
