export const read_only = (...fns: (() => string)[]) => () => `&:read-only {
${fns.map((fn) => fn()).join("\n")}
}`;
