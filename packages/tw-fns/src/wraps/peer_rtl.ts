/**
 * - &:is(:where(.peer):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) ~ *) {  }
 */
export const peer_rtl = (...fns: (() => string)[]) => () => `  &:is(:where([aria-peer]):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
