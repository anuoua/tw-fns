export const group_hover = (...fns: (() => string)[]) => () => `@media (hover: hover) { &:is(:where(.group):hover *) {
${fns.map((fn) => fn()).join("\n")}
}}`;
