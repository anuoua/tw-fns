export const min_xl = (...fns: (() => string)[]) => () => `@media (width >= 80rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
