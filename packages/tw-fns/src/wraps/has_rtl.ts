/**
 * - &:has(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) {  }
 */
export const has_rtl = (...fns: (() => string)[]) => () => `  &:has(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
