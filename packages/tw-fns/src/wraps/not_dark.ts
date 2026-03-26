export const not_dark = (...fns: (() => string)[]) => () => `@media not (prefers-color-scheme: dark) {
${fns.map((fn) => fn()).join("\n")}
}`;
