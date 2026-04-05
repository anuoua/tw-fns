/**
 * - &:is(:where(.group):user-invalid *) {  }
 */
export const group_user_invalid_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):user-invalid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
