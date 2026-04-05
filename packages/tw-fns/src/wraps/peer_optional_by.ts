/**
 * - &:is(:where(.peer):optional ~ *) {  }
 */
export const peer_optional_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):optional ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
