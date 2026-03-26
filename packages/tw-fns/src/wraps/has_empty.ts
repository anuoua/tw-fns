export const has_empty = (...fns: (() => string)[]) => () => `&:has(*:empty) {
${fns.map((fn) => fn()).join("\n")}
}`;
