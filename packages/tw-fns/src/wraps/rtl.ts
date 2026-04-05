/**
 * - &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {  }
 */
export const rtl = (...fns: (() => string)[]) => () => `  &:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
