/**
 * - &:is(:where(.peer):focus ~ *) {  }
 */
export const peer_focus = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):focus ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
