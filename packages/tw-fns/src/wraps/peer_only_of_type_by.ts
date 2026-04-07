/**
 * - &:is(:where(.peer):only-of-type ~ *) {  }
 */
export const peer_only_of_type_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):only-of-type ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
