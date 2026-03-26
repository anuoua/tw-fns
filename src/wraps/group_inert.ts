export const group_inert = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):is([inert], [inert] *) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
