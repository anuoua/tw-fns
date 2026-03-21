export const peer_valid = (...fns: (() => string)[]) => () => `&:is(:where(.peer):valid ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
