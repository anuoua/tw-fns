export const group_optional = (...fns: (() => string)[]) => () => `&:is(:where(.group):optional *) {
${fns.map((fn) => fn()).join("\n")}
}`;
