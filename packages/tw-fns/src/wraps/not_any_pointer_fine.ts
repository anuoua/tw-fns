/**
 * - @media not (any-pointer: fine) {  }
 */
export const not_any_pointer_fine = (...fns: (() => string)[]) => () => `  @media not (any-pointer: fine) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
