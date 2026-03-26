export const not_noscript = (...fns: (() => string)[]) => () => `@media not (scripting: none) {
${fns.map((fn) => fn()).join("\n")}
}`;
