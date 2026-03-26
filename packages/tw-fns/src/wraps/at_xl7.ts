export const at_xl7 = (...fns: (() => string)[]) => () => `@container (width >= 80rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
