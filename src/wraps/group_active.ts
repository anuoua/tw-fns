export const group_active = (...fns: (() => string)[]) => () => `&:is(:where(.group):active *) {
${fns.map((fn) => fn()).join("\n")}
}`;
