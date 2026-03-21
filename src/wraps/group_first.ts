export const group_first = (...fns: (() => string)[]) => () => `&:is(:where(.group):first-child *) {
${fns.map((fn) => fn()).join("\n")}
}`;
