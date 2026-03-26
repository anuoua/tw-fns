export const inverted_colors = (...fns: (() => string)[]) => () => `@media (inverted-colors: inverted) {
${fns.map((fn) => fn()).join("\n")}
}`;
