export const in_inert = (...fns: (() => string)[]) => () => `:where(*:is([inert], [inert] *)) & {
${fns.map((fn) => fn()).join("\n")}
}`;
