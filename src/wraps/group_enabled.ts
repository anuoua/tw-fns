export const group_enabled = (...fns: (() => string)[]) => () => `&:is(:where(.group):enabled *) {
${fns.map((fn) => fn()).join("\n")}
}`;
