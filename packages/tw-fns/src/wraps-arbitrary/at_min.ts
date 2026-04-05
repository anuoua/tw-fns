/**
 * - @container (width >= ${arbitrary}) {  }
 */
export const at_min = (arbitrary: string, ...fns: (() => string)[]) => () => `  @container (width >= ${arbitrary}) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
