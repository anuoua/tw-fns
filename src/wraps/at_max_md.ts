export const at_max_md = (...fns: (() => string)[]) => () => `@container (width < 28rem) {
${fns.map((fn) => fn()).join("\n")}
}`;
