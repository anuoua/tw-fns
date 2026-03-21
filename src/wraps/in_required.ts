export const in_required = (...fns: (() => string)[]) => () => `:where(*:required) & {
${fns.map((fn) => fn()).join("\n")}
}`;
