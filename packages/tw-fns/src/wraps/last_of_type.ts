export const last_of_type = (...fns: (() => string)[]) => () => `&:last-of-type {
${fns.map((fn) => fn()).join("\n")}
}`;
