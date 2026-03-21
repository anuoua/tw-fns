export const not_contrast_less = (...fns: (() => string)[]) => () => `@media not (prefers-contrast: less) {
${fns.map((fn) => fn()).join("\n")}
}`;
