export const group_user_valid = (...fns: (() => string)[]) => () => `&:is(:where(.group):user-valid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
