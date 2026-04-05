/**
 * - @media (width >= 80rem /* 1280px *\/) {  }
 */
export const xl = (...fns: (() => string)[]) => () => `  @media (width >= 80rem /* 1280px */) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
