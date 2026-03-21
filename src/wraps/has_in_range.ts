export const has_in_range = (...fns: (() => string)[]) => () => `&:has(*:in-range) {
${fns.map((fn) => fn()).join("\n")}
}`;
