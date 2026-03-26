export const target = (...fns: (() => string)[]) => () => `&:target {
${fns.map((fn) => fn()).join("\n")}
}`;
