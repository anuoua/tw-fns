export const not_inert = (...fns: (() => string)[]) => () => `&:not(*:is([inert], [inert] *)) {
${fns.map((fn) => fn()).join("\n")}
}`;
