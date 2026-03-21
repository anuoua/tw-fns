export const in_out_of_range = (...fns: (() => string)[]) => () => `:where(*:out-of-range) & {
${fns.map((fn) => fn()).join("\n")}
}`;
