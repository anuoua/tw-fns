/**
 * - &:is(:where(.peer):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) ~ *) {  }
 */
export const peer_rtl_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-peer="${name}"]):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) ~ *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
