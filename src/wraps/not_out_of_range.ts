export const not_out_of_range = (...fns: (() => string)[]) => () => `&:not(*:out-of-range) {
${fns.map((fn) => fn()).join("\n")}
}`;
