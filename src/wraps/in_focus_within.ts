export const in_focus_within = (...fns: (() => string)[]) => () => `:where(*:focus-within) & {
${fns.map((fn) => fn()).join("\n")}
}`;
