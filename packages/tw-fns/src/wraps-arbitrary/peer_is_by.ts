/**
 * - &:is(:where([aria-peer="${name}"]):is(${arbitrary}) ~ *) {  }
 */
export const peer_is_by = (name: string, arbitrary: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):is(${arbitrary}) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
