export const at_max_xl = (...fns: (() => string)[]) => () => `@container (width < 36rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
