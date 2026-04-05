/**
 * - &:is(:where(.peer):empty ~ *) {  }
 */
export const peer_empty = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):empty ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
