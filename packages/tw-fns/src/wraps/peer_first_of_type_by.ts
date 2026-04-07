/**
 * - &:is(:where(.peer):first-of-type ~ *) {  }
 */
export const peer_first_of_type_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):first-of-type ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
