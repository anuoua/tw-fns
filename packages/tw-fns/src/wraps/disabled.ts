/**
 * - &:disabled {  }
 */
export const disabled = (...fns: (() => string)[]) => () => `  &:disabled {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
