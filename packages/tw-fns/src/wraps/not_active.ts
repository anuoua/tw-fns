export const not_active = (...fns: (() => string)[]) => () => `&:not(*:active) {
${fns.map((fn) => fn()).join("\n")}
}`;
