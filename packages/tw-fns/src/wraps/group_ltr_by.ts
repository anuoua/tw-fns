export const group_ltr_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
