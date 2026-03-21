export const has_visited = (...fns: (() => string)[]) => () => `&:has(*:visited) {
${fns.map((fn) => fn()).join("\n")}
}`;
