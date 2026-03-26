export const group_default = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):default *) {
${fns.map((fn) => fn()).join("\n")}
}`;
