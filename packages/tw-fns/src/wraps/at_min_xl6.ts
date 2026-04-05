/**
 * - @container (width >= 72rem) {  }
 */
export const at_min_xl6 = (...fns: (() => string)[]) => () => `  @container (width >= 72rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
