export const at_min_lg = (...fns: (() => string)[]) => () => `@container (width >= 32rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
