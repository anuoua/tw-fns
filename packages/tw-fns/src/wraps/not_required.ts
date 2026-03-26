export const not_required = (...fns: (() => string)[]) => () => `&:not(*:required) {
${fns.map((fn) => fn()).join("\n")}
}`;
