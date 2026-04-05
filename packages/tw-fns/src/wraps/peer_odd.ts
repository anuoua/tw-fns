/**
 * - &:is(:where(.peer):nth-child(odd) ~ *) {  }
 */
export const peer_odd = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):nth-child(odd) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
