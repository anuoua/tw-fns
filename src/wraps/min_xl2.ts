export const min_xl2 = (...fns: (() => string)[]) => () => `@media (width >= 96rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
