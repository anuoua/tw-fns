export const group_required = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):required *) {
${fns.map((fn) => fn()).join("\n")}
}`;
