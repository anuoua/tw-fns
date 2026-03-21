export const group_default = (...fns: (() => string)[]) => () => `&:is(:where(.group):default *) {
${fns.map((fn) => fn()).join("\n")}
}`;
