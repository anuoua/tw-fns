/**
 * - @container (width < 32rem) {  }
 */
  export const at_max_lg = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 32rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
