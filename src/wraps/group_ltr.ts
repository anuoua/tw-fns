export const group_ltr = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
