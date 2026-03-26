export const group_focus = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):focus *) {
${fns.map((fn) => fn()).join("\n")}
}`;
