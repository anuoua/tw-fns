export const has_required = (...fns: (() => string)[]) => () => `&:has(*:required) {
${fns.map((fn) => fn()).join("\n")}
}`;
