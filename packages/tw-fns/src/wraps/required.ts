export const required = (...fns: (() => string)[]) => () => `&:required {
${fns.map((fn) => fn()).join("\n")}
}`;
