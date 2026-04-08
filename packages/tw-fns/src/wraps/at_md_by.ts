/**
 * - @container (width >= 28rem) {  }
 */
  export const at_md_by = (name: string, ...fns: (() => string)[]) => () => `  @container ${name} (width >= 28rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
