export const not_visited = (...fns: (() => string)[]) => () => `&:not(*:visited) {
${fns.map((fn) => fn()).join("\n")}
}`;
