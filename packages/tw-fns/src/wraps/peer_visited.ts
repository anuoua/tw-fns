/**
 * - &:is(:where(.peer):visited ~ *) {  }
 */
export const peer_visited = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):visited ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
