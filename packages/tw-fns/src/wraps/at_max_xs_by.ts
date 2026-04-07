/**
 * - @container (width < 20rem) {  }
 */
  export const at_max_xs = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 20rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
