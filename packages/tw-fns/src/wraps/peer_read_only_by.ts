/**
 * - &:is(:where(.peer):read-only ~ *) {  }
 */
export const peer_read_only_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):read-only ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
