/**
 * - &:is(:where(.peer):focus-within ~ *) {  }
 */
export const peer_focus_within = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):focus-within ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
