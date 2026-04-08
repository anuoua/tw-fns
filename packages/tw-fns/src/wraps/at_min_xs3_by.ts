/**
 * - @container (width >= 16rem) {  }
 */
  export const at_min_xs3_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 16rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
