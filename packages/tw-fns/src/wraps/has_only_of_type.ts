export const has_only_of_type = (...fns: (() => string)[]) => () => `&:has(*:only-of-type) {
${fns.map((fn) => fn()).join("\n")}
}`;
