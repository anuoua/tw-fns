export const peer_invalid = (...fns: (() => string)[]) => () => `&:is(:where(.peer):invalid ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
