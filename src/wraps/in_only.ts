export const in_only = (...fns: (() => string)[]) => () => `:where(*:only-child) & {
${fns.map((fn) => fn()).join("\n")}
}`;
