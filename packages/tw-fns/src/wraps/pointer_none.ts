/**
 * - @media (pointer: none) {  }
 */
export const pointer_none = (...fns: (() => string)[]) => () => `  @media (pointer: none) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
