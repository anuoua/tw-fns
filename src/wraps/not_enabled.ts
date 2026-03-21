export const not_enabled = (...fns: (() => string)[]) => () => `&:not(*:enabled) {
${fns.map((fn) => fn()).join("\n")}
}`;
