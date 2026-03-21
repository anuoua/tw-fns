export const portrait = (...fns: (() => string)[]) => () => `@media (orientation: portrait) {
${fns.map((fn) => fn()).join("\n")}
}`;
