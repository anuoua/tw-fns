/**
 * - &:visited {  }
 */
export const visited = (...fns: (() => string)[]) => () => `  &:visited {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
