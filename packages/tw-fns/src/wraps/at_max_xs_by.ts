/**
 * - @container (width < 20rem) {  }
 */
  export const at_max_xs_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 20rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
