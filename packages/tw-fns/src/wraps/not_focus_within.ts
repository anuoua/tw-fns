export const not_focus_within = (...fns: (() => string)[]) => () => `&:not(*:focus-within) {
${fns.map((fn) => fn()).join("\n")}
}`;
