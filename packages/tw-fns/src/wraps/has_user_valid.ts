export const has_user_valid = (...fns: (() => string)[]) => () => `&:has(*:user-valid) {
${fns.map((fn) => fn()).join("\n")}
}`;
