export const not_first_of_type = (...fns: (() => string)[]) => () => `&:not(*:first-of-type) {
${fns.map((fn) => fn()).join("\n")}
}`;
