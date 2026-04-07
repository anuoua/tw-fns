/**
 * - @container (width >= 64rem) {  }
 */
  export const at_min_xl5 = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 64rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
