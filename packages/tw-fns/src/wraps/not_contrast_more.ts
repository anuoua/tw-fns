export const not_contrast_more = (...fns: (() => string)[]) => () => `@media not (prefers-contrast: more) {
${fns.map((fn) => fn()).join("\n")}
}`;
