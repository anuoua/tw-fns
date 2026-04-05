/**
 * - &:is(:where(.peer):invalid ~ *) {  }
 */
export const peer_invalid = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):invalid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
