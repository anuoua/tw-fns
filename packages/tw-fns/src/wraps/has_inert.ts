export const has_inert = (...fns: (() => string)[]) => () => `&:has(*:is([inert], [inert] *)) {
${fns.map((fn) => fn()).join("\n")}
}`;
