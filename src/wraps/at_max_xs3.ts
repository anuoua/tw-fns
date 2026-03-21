export const at_max_xs3 = (...fns: (() => string)[]) => () => `@container (width < 16rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
