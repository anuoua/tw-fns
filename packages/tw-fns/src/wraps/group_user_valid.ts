export const group_user_valid = (...fns: (() => string)[]) => () => `&:is(:where([aria-group]):user-valid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
