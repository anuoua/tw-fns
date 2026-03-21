export const group_invalid = (...fns: (() => string)[]) => () => `&:is(:where(.group):invalid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
