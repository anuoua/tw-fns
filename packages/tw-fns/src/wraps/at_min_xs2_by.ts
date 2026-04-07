/**
 * - @container (width >= 18rem) {  }
 */
  export const at_min_xs2 = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 18rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
