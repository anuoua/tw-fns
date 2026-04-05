/**
 * - @container (width >= 36rem) {  }
 */
export const at_xl = (...fns: (() => string)[]) => () => `  @container (width >= 36rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
