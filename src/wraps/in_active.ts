export const in_active = (...fns: (() => string)[]) => () => `:where(*:active) & {
${fns.map((fn) => fn()).join("\n")}
}`;
