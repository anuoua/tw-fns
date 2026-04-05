/**
 * - &:is(:where(.peer):disabled ~ *) {  }
 */
export const peer_disabled_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):disabled ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
