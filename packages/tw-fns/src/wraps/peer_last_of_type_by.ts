/**
 * - &:is(:where(.peer):last-of-type ~ *) {  }
 */
export const peer_last_of_type_by = (name: string) => (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):last-of-type ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
