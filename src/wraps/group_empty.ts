export const group_empty = (...fns: (() => string)[]) => () => `&:is(:where(.group):empty *) {
${fns.map((fn) => fn()).join("\n")}
}`;
