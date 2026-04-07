/**
 * - &:is(:where(.peer):default ~ *) {  }
 */
export const peer_default_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):default ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
