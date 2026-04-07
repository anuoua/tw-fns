/**
 * - &:is(:where(.peer):invalid ~ *) {  }
 */
export const peer_invalid_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):invalid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
