export const in_visited = (...fns: (() => string)[]) => () => `:where(*:visited) & {
${fns.map((fn) => fn()).join("\n")}
}`;
