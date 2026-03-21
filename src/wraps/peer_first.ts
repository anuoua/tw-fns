export const peer_first = (...fns: (() => string)[]) => () => `&:is(:where(.peer):first-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
