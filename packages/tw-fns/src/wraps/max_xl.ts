/**
 * - @media (width < 80rem) {  }
 */
export const max_xl = (...fns: (() => string)[]) => () => `  @media (width < 80rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
