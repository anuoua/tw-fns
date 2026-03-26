export const not_valid = (...fns: (() => string)[]) => () => `&:not(*:valid) {
${fns.map((fn) => fn()).join("\n")}
}`;
