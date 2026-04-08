/**
 * - @container (width < 64rem) {  }
 */
  export const at_max_xl5_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 64rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
