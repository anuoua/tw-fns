export const group_even = (...fns: (() => string)[]) => () => `&:is(:where(.group):nth-child(even) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
