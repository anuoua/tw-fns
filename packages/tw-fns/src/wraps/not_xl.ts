/**
 * - @media not (width >= 80rem) {  }
 */
export const not_xl = (...fns: (() => string)[]) => () => `  @media not (width >= 80rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
