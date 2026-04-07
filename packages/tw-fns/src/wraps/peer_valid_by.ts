/**
 * - &:is(:where(.peer):valid ~ *) {  }
 */
export const peer_valid_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):valid ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
