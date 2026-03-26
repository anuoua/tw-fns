export const print = (...fns: (() => string)[]) => () => `@media print {
${fns.map((fn) => fn()).join("\n")}
}`;
