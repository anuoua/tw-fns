export const active = (...fns: (() => string)[]) => () => `&:active {
${fns.map((fn) => fn()).join("\n")}
}`;
