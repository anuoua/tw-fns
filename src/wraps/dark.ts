export const dark = (...fns: (() => string)[]) => () => `@media (prefers-color-scheme: dark) {
${fns.map((fn) => fn()).join("\n")}
}`;
