/**
 * - &:is(:where(.peer):required ~ *) {  }
 */
export const peer_required_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):required ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
