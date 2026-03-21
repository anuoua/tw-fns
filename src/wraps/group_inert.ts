export const group_inert = (...fns: (() => string)[]) => () => `&:is(:where(.group):is([inert], [inert] *) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
