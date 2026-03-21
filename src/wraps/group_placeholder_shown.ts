export const group_placeholder_shown = (...fns: (() => string)[]) => () => `&:is(:where(.group):placeholder-shown *) {
${fns.map((fn) => fn()).join("\n")}
}`;
