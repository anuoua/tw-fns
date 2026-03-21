export const has_odd = (...fns: (() => string)[]) => () => `&:has(*:nth-child(odd)) {
${fns.map((fn) => fn()).join("\n")}
}`;
