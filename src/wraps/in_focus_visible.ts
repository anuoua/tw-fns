export const in_focus_visible = (...fns: (() => string)[]) => () => `:where(*:focus-visible) & {
${fns.map((fn) => fn()).join("\n")}
}`;
