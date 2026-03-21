export const group_last = (...fns: (() => string)[]) => () => `&:is(:where(.group):last-child *) {
${fns.map((fn) => fn()).join("\n")}
}`;
