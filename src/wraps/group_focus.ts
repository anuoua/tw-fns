export const group_focus = (...fns: (() => string)[]) => () => `&:is(:where(.group):focus *) {
${fns.map((fn) => fn()).join("\n")}
}`;
