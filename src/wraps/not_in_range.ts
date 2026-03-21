export const not_in_range = (...fns: (() => string)[]) => () => `&:not(*:in-range) {
${fns.map((fn) => fn()).join("\n")}
}`;
