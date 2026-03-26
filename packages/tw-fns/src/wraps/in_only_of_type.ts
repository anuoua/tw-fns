export const in_only_of_type = (...fns: (() => string)[]) => () => `:where(*:only-of-type) & {
${fns.map((fn) => fn()).join("\n")}
}`;
