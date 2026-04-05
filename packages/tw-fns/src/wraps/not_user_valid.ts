/**
 * - &:not(*:user-valid) {  }
 */
export const not_user_valid = (...fns: (() => string)[]) => () => `  &:not(*:user-valid) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
