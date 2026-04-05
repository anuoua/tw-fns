/**
 * - &:is(:where(.group):is([inert], [inert] *) *) {  }
 */
export const group_inert_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):is([inert], [inert] *) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
