/**
 * - @media (width >= 48rem) {  }
 */
export const min_md = (...fns: (() => string)[]) => () => `  @media (width >= 48rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
