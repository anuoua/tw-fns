export const has_target = (...fns: (() => string)[]) => () => `&:has(*:target) {
${fns.map((fn) => fn()).join("\n")}
}`;
