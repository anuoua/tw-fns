/**
 * - &:is(:where(.group):is([open], :popover-open, :open) *) {  }
 */
export const group_open_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):is([open], :popover-open, :open) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
