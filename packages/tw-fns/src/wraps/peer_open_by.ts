/**
 * - &:is(:where(.peer):is([open], :popover-open, :open) ~ *) {  }
 */
export const peer_open_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):is([open], :popover-open, :open) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
