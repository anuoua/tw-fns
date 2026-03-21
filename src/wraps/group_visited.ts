export const group_visited = (...fns: (() => string)[]) => () => `&:is(:where(.group):visited *) {
${fns.map((fn) => fn()).join("\n")}
}`;
