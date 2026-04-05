/**
 * - &:not(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) {  }
 */
export const not_rtl = (...fns: (() => string)[]) => () => `  &:not(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
