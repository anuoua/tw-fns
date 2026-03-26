export const group_odd = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):nth-child(odd) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
