export const user_valid = (...fns: (() => string)[]) => () => `&:user-valid {
${fns.map((fn) => fn()).join("\n")}
}`;
