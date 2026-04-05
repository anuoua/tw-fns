/**
 * - @container (width >= 42rem) {  }
 */
export const at_xl2 = (...fns: (() => string)[]) => () => `  @container (width >= 42rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
