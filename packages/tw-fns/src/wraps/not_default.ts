export const not_default = (...fns: (() => string)[]) => () => `&:not(*:default) {
${fns.map((fn) => fn()).join("\n")}
}`;
