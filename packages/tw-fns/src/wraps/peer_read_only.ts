/**
 * - &:is(:where(.peer):read-only ~ *) {  }
 */
export const peer_read_only = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):read-only ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
