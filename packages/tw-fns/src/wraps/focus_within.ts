export const focus_within = (...fns: (() => string)[]) => () => `&:focus-within {
${fns.map((fn) => fn()).join("\n")}
}`;
