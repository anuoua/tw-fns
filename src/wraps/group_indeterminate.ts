export const group_indeterminate = (...fns: (() => string)[]) => () => `&:is(:where(.group):indeterminate *) {
${fns.map((fn) => fn()).join("\n")}
}`;
