export const group_rtl = (...fns: (() => string)[]) => () => `&:is(:where(.group):where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
