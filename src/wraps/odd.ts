export const odd = (...fns: (() => string)[]) => () => `&:nth-child(odd) {
${fns.map((fn) => fn()).join("\n")}
}`;
