/**
 * - &:is(:where(.group):disabled *) {  }
 */
export const group_disabled = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):disabled *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
