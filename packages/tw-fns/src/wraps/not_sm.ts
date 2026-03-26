export const not_sm = (...fns: (() => string)[]) => () => `@media not (width >= 40rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
