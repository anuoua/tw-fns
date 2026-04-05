/**
 * - :is(& *) {  }
 */
export const below = (...fns: (() => string)[]) => () => `  :is(& *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
