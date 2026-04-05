/**
 * - @container (width < 80rem) {  }
 */
export const at_max_xl7 = (...fns: (() => string)[]) => () => `  @container (width < 80rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
