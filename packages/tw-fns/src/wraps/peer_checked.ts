/**
 * - &:is(:where(.peer):checked ~ *) {  }
 */
export const peer_checked = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):checked ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
