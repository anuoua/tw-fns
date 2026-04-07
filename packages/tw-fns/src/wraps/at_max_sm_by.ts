/**
 * - @container (width < 24rem) {  }
 */
  export const at_max_sm = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 24rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
