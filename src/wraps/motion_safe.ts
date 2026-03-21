export const motion_safe = (...fns: (() => string)[]) => () => `@media (prefers-reduced-motion: no-preference) {
${fns.map((fn) => fn()).join("\n")}
}`;
