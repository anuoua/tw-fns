export const not_md = (...fns: (() => string)[]) => () => `@media not (width >= 48rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
