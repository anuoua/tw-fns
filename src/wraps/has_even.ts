export const has_even = (...fns: (() => string)[]) => () => `&:has(*:nth-child(even)) {
${fns.map((fn) => fn()).join("\n")}
}`;
