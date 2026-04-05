/**
 * - &:is(:where(.peer):placeholder-shown ~ *) {  }
 */
export const peer_placeholder_shown = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):placeholder-shown ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
