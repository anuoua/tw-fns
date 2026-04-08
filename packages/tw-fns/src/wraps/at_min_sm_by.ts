/**
 * - @container (width >= 24rem) {  }
 */
  export const at_min_sm_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 24rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
