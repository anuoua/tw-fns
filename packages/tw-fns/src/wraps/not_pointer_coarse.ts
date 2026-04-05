/**
 * - @media not (pointer: coarse) {  }
 */
export const not_pointer_coarse = (...fns: (() => string)[]) => () => `  @media not (pointer: coarse) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
