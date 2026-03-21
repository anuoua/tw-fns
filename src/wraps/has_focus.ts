export const has_focus = (...fns: (() => string)[]) => () => `&:has(*:focus) {
${fns.map((fn) => fn()).join("\n")}
}`;
