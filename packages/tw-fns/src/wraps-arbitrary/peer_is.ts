/**
 * - &:is(:where([aria-peer]):is(${arbitrary}) ~ *) {  }
 */
export const peer_is = (arbitrary: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):is(${arbitrary}) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
