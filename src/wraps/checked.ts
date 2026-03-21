export const checked = (...fns: (() => string)[]) => () => `&:checked {
${fns.map((fn) => fn()).join("\n")}
}`;
