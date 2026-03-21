export const in_valid = (...fns: (() => string)[]) => () => `:where(*:valid) & {
${fns.map((fn) => fn()).join("\n")}
}`;
