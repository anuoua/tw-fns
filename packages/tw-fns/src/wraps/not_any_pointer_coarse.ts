/**
 * - @media not (any-pointer: coarse) {  }
 */
export const not_any_pointer_coarse = (...fns: (() => string)[]) => () => `  @media not (any-pointer: coarse) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
