export const not_lg = (...fns: (() => string)[]) => () => `@media not (width >= 64rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
