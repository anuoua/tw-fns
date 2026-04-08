/**
 * - @container (width < 32rem) {  }
 */
  export const at_max_lg_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 32rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
