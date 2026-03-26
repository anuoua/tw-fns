export const not_invalid = (...fns: (() => string)[]) => () => `&:not(*:invalid) {
${fns.map((fn) => fn()).join("\n")}
}`;
