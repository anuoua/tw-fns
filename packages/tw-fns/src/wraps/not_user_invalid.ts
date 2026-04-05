/**
 * - &:not(*:user-invalid) {  }
 */
export const not_user_invalid = (...fns: (() => string)[]) => () => `  &:not(*:user-invalid) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
