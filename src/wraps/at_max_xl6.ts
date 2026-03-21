export const at_max_xl6 = (...fns: (() => string)[]) => () => `@container (width < 72rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
