export const first_line = (...fns: (() => string)[]) => () => `&::first-line {
${fns.map((fn) => fn()).join("\n")}
}`;
