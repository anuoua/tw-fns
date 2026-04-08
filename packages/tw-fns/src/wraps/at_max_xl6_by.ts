/**
 * - @container (width < 72rem) {  }
 */
  export const at_max_xl6_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < 72rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
