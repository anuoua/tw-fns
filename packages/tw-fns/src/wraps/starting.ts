/**
 * - @starting-style  {  }
 */
export const starting = (...fns: (() => string)[]) => () => `  @starting-style  {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
