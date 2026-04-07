/**
 * - &:is(:where(.peer):autofill ~ *) {  }
 */
export const peer_autofill_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):autofill ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
