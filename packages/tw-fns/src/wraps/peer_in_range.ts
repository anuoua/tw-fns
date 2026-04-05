/**
 * - &:is(:where(.peer):in-range ~ *) {  }
 */
export const peer_in_range = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):in-range ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
