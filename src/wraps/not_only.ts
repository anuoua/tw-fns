export const not_only = (...fns: (() => string)[]) => () => `&:not(*:only-child) {
${fns.map((fn) => fn()).join("\n")}
}`;
