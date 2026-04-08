/**
 * - @container (width >= 48rem) {  }
 */
  export const at_xl3_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 48rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
