export const not_last_of_type = (...fns: (() => string)[]) => () => `&:not(*:last-of-type) {
${fns.map((fn) => fn()).join("\n")}
}`;
