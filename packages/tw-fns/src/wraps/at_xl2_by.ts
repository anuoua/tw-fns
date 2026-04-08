/**
 * - @container (width >= 42rem) {  }
 */
  export const at_xl2_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 42rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
