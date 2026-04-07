/**
 * - &:is(:where(.group):user-valid *) {  }
 */
export const group_user_valid_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):user-valid *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
