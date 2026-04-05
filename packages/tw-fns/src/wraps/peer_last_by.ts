/**
 * - &:is(:where(.peer):last-child ~ *) {  }
 */
export const peer_last_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):last-child ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
