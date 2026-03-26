export const at_xl4 = (...fns: (() => string)[]) => () => `@container (width >= 56rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
