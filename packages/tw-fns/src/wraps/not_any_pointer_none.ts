/**
 * - @media not (any-pointer: none) {  }
 */
export const not_any_pointer_none = (...fns: (() => string)[]) => () => `  @media not (any-pointer: none) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
