export const has_hover = (...fns: (() => string)[]) => () => `@media (hover: hover) { &:has(*:hover) {
${fns.map((fn) => fn()).join("\n")}
}}`;
