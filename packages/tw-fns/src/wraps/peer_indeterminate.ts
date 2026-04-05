/**
 * - &:is(:where(.peer):indeterminate ~ *) {  }
 */
export const peer_indeterminate = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):indeterminate ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
