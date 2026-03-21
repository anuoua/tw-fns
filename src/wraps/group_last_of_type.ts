export const group_last_of_type = (...fns: (() => string)[]) => () => `&:is(:where(.group):last-of-type *) {
${fns.map((fn) => fn()).join("\n")}
}`;
