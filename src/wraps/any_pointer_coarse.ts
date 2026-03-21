export const any_pointer_coarse = (...fns: (() => string)[]) => () => `@media (any-pointer: coarse) {
${fns.map((fn) => fn()).join("\n")}
}`;
