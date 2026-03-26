export const forced_colors = (...fns: (() => string)[]) => () => `@media (forced-colors: active) {
${fns.map((fn) => fn()).join("\n")}
}`;
