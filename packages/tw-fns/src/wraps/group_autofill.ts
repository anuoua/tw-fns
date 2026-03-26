export const group_autofill = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):autofill *) {
${fns.map((fn) => fn()).join("\n")}
}`;
