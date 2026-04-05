/**
 * - @media (width >= 40rem) {  }
 */
export const min_sm = (...fns: (() => string)[]) => () => `  @media (width >= 40rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
