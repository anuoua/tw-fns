export const landscape = (...fns: (() => string)[]) => () => `@media (orientation: landscape) {
${fns.map((fn) => fn()).join("\n")}
}`;
