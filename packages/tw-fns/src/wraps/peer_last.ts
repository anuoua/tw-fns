/**
 * - &:is(:where(.peer):last-child ~ *) {  }
 */
export const peer_last = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):last-child ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
