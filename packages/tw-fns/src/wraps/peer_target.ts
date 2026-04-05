/**
 * - &:is(:where(.peer):target ~ *) {  }
 */
export const peer_target = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):target ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
