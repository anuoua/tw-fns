export const group_in_range = (...fns: (() => string)[]) => () => `&:is(:where(.group):in-range *) {
${fns.map((fn) => fn()).join("\n")}
}`;
