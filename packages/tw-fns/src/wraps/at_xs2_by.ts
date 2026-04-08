/**
 * - @container (width >= 18rem) {  }
 */
  export const at_xs2_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 18rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
