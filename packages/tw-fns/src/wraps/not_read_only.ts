export const not_read_only = (...fns: (() => string)[]) => () => `&:not(*:read-only) {
${fns.map((fn) => fn()).join("\n")}
}`;
