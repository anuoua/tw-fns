export const not_pointer_fine = (...fns: (() => string)[]) => () => `@media not (pointer: fine) {
${fns.map((fn) => fn()).join("\n")}
}`;
