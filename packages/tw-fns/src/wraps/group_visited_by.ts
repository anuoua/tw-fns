/**
 * - &:is(:where(.group):visited *) {  }
 */
export const group_visited_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):visited *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
