export const group_checked = (...fns: (() => string)[]) => () => `&:is(:where(.group):checked *) {
${fns.map((fn) => fn()).join("\n")}
}`;
