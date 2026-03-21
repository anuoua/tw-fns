export const has_last = (...fns: (() => string)[]) => () => `&:has(*:last-child) {
${fns.map((fn) => fn()).join("\n")}
}`;
