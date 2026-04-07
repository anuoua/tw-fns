/**
 * - &:is(:where(.peer):nth-child(odd) ~ *) {  }
 */
export const peer_odd_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):nth-child(odd) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
