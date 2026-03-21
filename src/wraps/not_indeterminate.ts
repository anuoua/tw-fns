export const not_indeterminate = (...fns: (() => string)[]) => () => `&:not(*:indeterminate) {
${fns.map((fn) => fn()).join("\n")}
}`;
