/**
 * - :where(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) & {  }
 */
export const in_rtl = (...fns: (() => string)[]) => () => `  :where(*:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *)) & {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
