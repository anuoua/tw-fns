/**
 * - &:is(:where(.peer):autofill ~ *) {  }
 */
export const peer_autofill = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):autofill ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
