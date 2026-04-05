/**
 * - @media (width >= 64rem /* 1024px */) {  }
 */
export const lg = (...fns: (() => string)[]) => () => `  @media (width >= 64rem /* 1024px */) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
