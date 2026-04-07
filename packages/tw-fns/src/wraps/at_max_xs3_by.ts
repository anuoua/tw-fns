/**
 * - @container (width < 16rem) {  }
 */
  export const at_max_xs3 = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 16rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
