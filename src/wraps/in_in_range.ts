export const in_in_range = (...fns: (() => string)[]) => () => `:where(*:in-range) & {
${fns.map((fn) => fn()).join("\n")}
}`;
