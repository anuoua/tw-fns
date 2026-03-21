export const group_autofill = (...fns: (() => string)[]) => () => `&:is(:where(.group):autofill *) {
${fns.map((fn) => fn()).join("\n")}
}`;
