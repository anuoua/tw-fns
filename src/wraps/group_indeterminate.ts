export const group_indeterminate = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):indeterminate *) {
${fns.map((fn) => fn()).join("\n")}
}`;
