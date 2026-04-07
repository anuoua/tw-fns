/**
 * - @container (width >= 80rem) {  }
 */
  export const at_xl7 = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 80rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
