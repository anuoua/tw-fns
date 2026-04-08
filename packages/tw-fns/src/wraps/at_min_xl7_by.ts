/**
 * - @container (width >= 80rem) {  }
 */
  export const at_min_xl7_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 80rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
