export const not_target = (...fns: (() => string)[]) => () => `&:not(*:target) {
${fns.map((fn) => fn()).join("\n")}
}`;
