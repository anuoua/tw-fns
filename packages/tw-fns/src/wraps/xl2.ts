/**
 * - @media (width >= 96rem /* 1536px */) {  }
 */
export const xl2 = (...fns: (() => string)[]) => () => `  @media (width >= 96rem /* 1536px */) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
