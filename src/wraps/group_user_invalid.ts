export const group_user_invalid = (...fns: (() => string)[]) => () => `&:is(:where(.group):user-invalid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
