export const group_valid = (...fns: (() => string)[]) => () => `&:is(:where(.group):valid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
