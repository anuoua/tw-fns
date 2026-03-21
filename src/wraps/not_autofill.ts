export const not_autofill = (...fns: (() => string)[]) => () => `&:not(*:autofill) {
${fns.map((fn) => fn()).join("\n")}
}`;
