/**
 * - &::placeholder {  }
 */
export const placeholder = (...fns: (() => string)[]) => () => `  &::placeholder {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
