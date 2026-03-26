export const at_max_sm = (...fns: (() => string)[]) => () => `@container (width < 24rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
