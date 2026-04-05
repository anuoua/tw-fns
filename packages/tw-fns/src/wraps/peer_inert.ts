/**
 * - &:is(:where(.peer):is([inert], [inert] *) ~ *) {  }
 */
export const peer_inert = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):is([inert], [inert] *) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
