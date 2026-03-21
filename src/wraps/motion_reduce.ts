export const motion_reduce = (...fns: (() => string)[]) => () => `@media (prefers-reduced-motion: reduce) {
${fns.map((fn) => fn()).join("\n")}
}`;
