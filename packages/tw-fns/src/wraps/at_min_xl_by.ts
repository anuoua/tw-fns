/**
 * - @container (width >= 36rem) {  }
 */
  export const at_min_xl = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 36rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
