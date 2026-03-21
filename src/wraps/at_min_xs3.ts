export const at_min_xs3 = (...fns: (() => string)[]) => () => `@container (width >= 16rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
