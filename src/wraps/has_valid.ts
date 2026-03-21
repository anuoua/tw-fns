export const has_valid = (...fns: (() => string)[]) => () => `&:has(*:valid) {
${fns.map((fn) => fn()).join("\n")}
}`;
