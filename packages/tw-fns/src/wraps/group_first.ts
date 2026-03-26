export const group_first = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):first-child *) {
${fns.map((fn) => fn()).join("\n")}
}`;
