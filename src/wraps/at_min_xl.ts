export const at_min_xl = (...fns: (() => string)[]) => () => `@container (width >= 36rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
