/**
 * - &:is(:where(.peer):placeholder-shown ~ *) {  }
 */
export const peer_placeholder_shown_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):placeholder-shown ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
