/**
 * - &:is(:where(.peer):is([open], :popover-open, :open) ~ *) {  }
 */
export const peer_open = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):is([open], :popover-open, :open) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
