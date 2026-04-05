/**
 * - &:user-invalid {  }
 */
export const user_invalid = (...fns: (() => string)[]) => () => `  &:user-invalid {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
