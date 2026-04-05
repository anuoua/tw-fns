/**
 * - @container (width >= 24rem) {  }
 */
export const at_sm = (...fns: (() => string)[]) => () => `  @container (width >= 24rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
