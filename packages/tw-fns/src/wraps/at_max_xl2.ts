export const at_max_xl2 = (...fns: (() => string)[]) => () => `@container (width < 42rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
