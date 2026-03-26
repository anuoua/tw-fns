export const not_odd = (...fns: (() => string)[]) => () => `&:not(*:nth-child(odd)) {
${fns.map((fn) => fn()).join("\n")}
}`;
