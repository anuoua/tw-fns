export const group_odd = (...fns: (() => string)[]) => () => `&:is(:where(.group):nth-child(odd) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
