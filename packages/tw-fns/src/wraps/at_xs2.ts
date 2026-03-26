export const at_xs2 = (...fns: (() => string)[]) => () => `@container (width >= 18rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
