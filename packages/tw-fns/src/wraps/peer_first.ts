/**
 * - &:is(:where(.peer):first-child ~ *) {  }
 */
export const peer_first = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):first-child ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
