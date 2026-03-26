export const in_user_invalid = (...fns: (() => string)[]) => () => `:where(*:user-invalid) & {
${fns.map((fn) => fn()).join("\n")}
}`;
