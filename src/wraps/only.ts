export const only = (...fns: (() => string)[]) => () => `&:only-child {
${fns.map((fn) => fn()).join("\n")}
}`;
