export const group_target = (...fns: (() => string)[]) => () => `&:is(:where(.group):target *) {
${fns.map((fn) => fn()).join("\n")}
}`;
