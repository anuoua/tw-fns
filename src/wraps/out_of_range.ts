export const out_of_range = (...fns: (() => string)[]) => () => `&:out-of-range {
${fns.map((fn) => fn()).join("\n")}
}`;
