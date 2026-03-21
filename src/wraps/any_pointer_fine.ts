export const any_pointer_fine = (...fns: (() => string)[]) => () => `@media (any-pointer: fine) {
${fns.map((fn) => fn()).join("\n")}
}`;
