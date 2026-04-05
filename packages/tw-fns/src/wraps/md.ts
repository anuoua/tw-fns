/**
 * - @media (width >= 48rem /* 768px */) {  }
 */
export const md = (...fns: (() => string)[]) => () => `  @media (width >= 48rem /* 768px */) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
