export const not_first = (...fns: (() => string)[]) => () => `&:not(*:first-child) {
${fns.map((fn) => fn()).join("\n")}
}`;
