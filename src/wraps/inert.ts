export const inert = (...fns: (() => string)[]) => () => `&:is([inert], [inert] *) {
${fns.map((fn) => fn()).join("\n")}
}`;
