export const not_motion_safe = (...fns: (() => string)[]) => () => `@media not (prefers-reduced-motion: no-preference) {
${fns.map((fn) => fn()).join("\n")}
}`;
