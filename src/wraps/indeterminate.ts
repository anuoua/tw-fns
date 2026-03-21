export const indeterminate = (...fns: (() => string)[]) => () => `&:indeterminate {
${fns.map((fn) => fn()).join("\n")}
}`;
