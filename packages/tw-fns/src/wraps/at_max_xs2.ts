/**
 * - @container (width < 18rem) {  }
 */
export const at_max_xs2 = (...fns: (() => string)[]) => () => `  @container (width < 18rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
