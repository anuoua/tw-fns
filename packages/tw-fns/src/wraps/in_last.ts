export const in_last = (...fns: (() => string)[]) => () => `:where(*:last-child) & {
${fns.map((fn) => fn()).join("\n")}
}`;
