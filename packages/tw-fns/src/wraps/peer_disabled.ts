/**
 * - &:is(:where(.peer):disabled ~ *) {  }
 */
export const peer_disabled = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):disabled ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
