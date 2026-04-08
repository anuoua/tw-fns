/**
 * - @container (width >= 36rem) {  }
 */
  export const at_xl_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 36rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
