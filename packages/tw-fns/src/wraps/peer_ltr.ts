/**
 * - &:is(:where(.peer):where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) ~ *) {  }
 */
export const peer_ltr = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
