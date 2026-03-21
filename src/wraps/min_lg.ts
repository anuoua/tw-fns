export const min_lg = (...fns: (() => string)[]) => () => `@media (width >= 64rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
