export const in_read_only = (...fns: (() => string)[]) => () => `:where(*:read-only) & {
${fns.map((fn) => fn()).join("\n")}
}`;
