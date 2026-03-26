export const not_pointer_none = (...fns: (() => string)[]) => () => `@media not (pointer: none) {
${fns.map((fn) => fn()).join("\n")}
}`;
