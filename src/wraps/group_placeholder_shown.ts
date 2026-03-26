export const group_placeholder_shown = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):placeholder-shown *) {
${fns.map((fn) => fn()).join("\n")}
}`;
