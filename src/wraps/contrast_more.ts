export const contrast_more = (...fns: (() => string)[]) => () => `@media (prefers-contrast: more) {
${fns.map((fn) => fn()).join("\n")}
}`;
