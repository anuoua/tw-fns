export const not_portrait = (...fns: (() => string)[]) => () => `@media not (orientation: portrait) {
${fns.map((fn) => fn()).join("\n")}
}`;
