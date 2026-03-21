export const max_sm = (...fns: (() => string)[]) => () => `@media (width < 40rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
