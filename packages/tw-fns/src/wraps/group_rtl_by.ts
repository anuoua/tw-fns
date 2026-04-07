/**
 * - &:is(:where(.group):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) *) {  }
 */
export const group_rtl_by = (name: string, ...fns: (() => string)[]) => () => `  &:is(:where([aria-group="${name}"]):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) *) {
  ${fns.map((fn) => fn()).join("\n")}
  }`;
