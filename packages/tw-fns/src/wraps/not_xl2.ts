/**
 * - @media not (width >= 96rem) {  }
 */
export const not_xl2 = (...fns: (() => string)[]) => () => `  @media not (width >= 96rem) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
