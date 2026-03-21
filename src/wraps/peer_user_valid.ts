export const peer_user_valid = (...fns: (() => string)[]) => () => `&:is(:where(.peer):user-valid ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
