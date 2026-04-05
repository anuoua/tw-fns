/**
 * - &:is(:where(.group):is([open], :popover-open, :open) *) {  }
 */
export const group_open = (...fns: (() => string)[]) => () => `  &:is(:where([aria-group]):is([open], :popover-open, :open) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
