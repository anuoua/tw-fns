export const in_enabled = (...fns: (() => string)[]) => () => `:where(*:enabled) & {
${fns.map((fn) => fn()).join("\n")}
}`;
