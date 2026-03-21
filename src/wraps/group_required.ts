export const group_required = (...fns: (() => string)[]) => () => `&:is(:where(.group):required *) {
${fns.map((fn) => fn()).join("\n")}
}`;
