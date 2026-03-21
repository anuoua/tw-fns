export const group_read_only = (...fns: (() => string)[]) => () => `&:is(:where(.group):read-only *) {
${fns.map((fn) => fn()).join("\n")}
}`;
