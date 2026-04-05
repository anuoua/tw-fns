/**
 * - &:has(*:user-invalid) {  }
 */
export const has_user_invalid = (...fns: (() => string)[]) => () => `  &:has(*:user-invalid) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
