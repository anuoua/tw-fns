export const not_ltr = (...fns: (() => string)[]) => () => `&:not(*:where(:dir(ltr), [dir="ltr"], [dir="ltr"] *)) {
${fns.map((fn) => fn()).join("\n")}
}`;
