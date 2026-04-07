/**
 * - &:is(:where(.peer):focus-visible ~ *) {  }
 */
export const peer_focus_visible_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):focus-visible ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
