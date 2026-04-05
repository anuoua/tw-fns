/**
 * - @media (any-pointer: none) {  }
 */
export const any_pointer_none = (...fns: (() => string)[]) => () => `  @media (any-pointer: none) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
