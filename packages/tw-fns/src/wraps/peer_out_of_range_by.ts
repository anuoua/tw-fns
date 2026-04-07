/**
 * - &:is(:where(.peer):out-of-range ~ *) {  }
 */
export const peer_out_of_range_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):out-of-range ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
