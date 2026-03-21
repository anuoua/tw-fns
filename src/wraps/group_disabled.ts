export const group_disabled = (...fns: (() => string)[]) => () => `&:is(:where(.group):disabled *) {
${fns.map((fn) => fn()).join("\n")}
}`;
