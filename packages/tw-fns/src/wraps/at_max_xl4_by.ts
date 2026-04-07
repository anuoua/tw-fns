/**
 * - @container (width < 56rem) {  }
 */
  export const at_max_xl4 = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 56rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
