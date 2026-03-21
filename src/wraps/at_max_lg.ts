export const at_max_lg = (...fns: (() => string)[]) => () => `@container (width < 32rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
