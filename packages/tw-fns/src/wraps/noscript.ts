export const noscript = (...fns: (() => string)[]) => () => `@media (scripting: none) {
${fns.map((fn) => fn()).join("\n")}
}`;
