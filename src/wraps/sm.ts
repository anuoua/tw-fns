export const sm = (...fns: (() => string)[]) => () => `@media (width >= 40rem /* 640px */) {
${fns.map((fn) => fn()).join("\n")}
}`;
