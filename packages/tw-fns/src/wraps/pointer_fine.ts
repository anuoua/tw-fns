/**
 * - @media (pointer: fine) {  }
 */
export const pointer_fine = (...fns: (() => string)[]) => () => `  @media (pointer: fine) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
