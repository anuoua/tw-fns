export const group_visited = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):visited *) {
${fns.map((fn) => fn()).join("\n")}
}`;
