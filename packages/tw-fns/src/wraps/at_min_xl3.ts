/**
 * - @container (width >= 48rem) {  }
 */
export const at_min_xl3 = (...fns: (() => string)[]) => () => `  @container (width >= 48rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
