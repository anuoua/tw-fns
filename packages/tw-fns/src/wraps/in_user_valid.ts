export const in_user_valid = (...fns: (() => string)[]) => () => `:where(*:user-valid) & {
${fns.map((fn) => fn()).join("\n")}
}`;
