export const at_xs = (...fns: (() => string)[]) => () => `@container (width >= 20rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
