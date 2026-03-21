export const group_focus_within = (...fns: (() => string)[]) => () => `&:is(:where(.group):focus-within *) {
${fns.map((fn) => fn()).join("\n")}
}`;
