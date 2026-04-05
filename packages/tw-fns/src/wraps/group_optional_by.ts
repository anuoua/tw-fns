/**
 * - &:is(:where(.group):optional *) {  }
 */
export const group_optional_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):optional *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
