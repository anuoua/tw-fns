/**
 * - &:is(:where(.peer):in-range ~ *) {  }
 */
export const peer_in_range_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):in-range ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
