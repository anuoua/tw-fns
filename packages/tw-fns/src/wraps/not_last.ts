export const not_last = (...fns: (() => string)[]) => () => `&:not(*:last-child) {
${fns.map((fn) => fn()).join("\n")}
}`;
