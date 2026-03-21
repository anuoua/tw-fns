export const not_disabled = (...fns: (() => string)[]) => () => `&:not(*:disabled) {
${fns.map((fn) => fn()).join("\n")}
}`;
