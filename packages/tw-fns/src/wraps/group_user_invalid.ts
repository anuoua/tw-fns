/**
 * - &:is(:where(.group):user-invalid *) {  }
 */
export const group_user_invalid = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):user-invalid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
