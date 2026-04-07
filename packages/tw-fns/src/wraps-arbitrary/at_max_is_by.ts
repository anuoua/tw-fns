/**
 * - @container ${name} (width < ${arbitrary}) {  }
 */
export const at_max_is_by = (name: string, arbitrary: string, ...fns: (() => string)[]) => () => `  @container ${name} (width < ${arbitrary}) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
