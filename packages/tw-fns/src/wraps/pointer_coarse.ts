export const pointer_coarse = (...fns: (() => string)[]) => () => `@media (pointer: coarse) {
${fns.map((fn) => fn()).join("\n")}
}`;
