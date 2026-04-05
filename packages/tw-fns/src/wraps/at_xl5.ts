/**
 * - @container (width >= 64rem) {  }
 */
export const at_xl5 = (...fns: (() => string)[]) => () => `  @container (width >= 64rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
