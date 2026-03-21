export const not_focus_visible = (...fns: (() => string)[]) => () => `&:not(*:focus-visible) {
${fns.map((fn) => fn()).join("\n")}
}`;
