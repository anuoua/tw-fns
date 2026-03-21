export const peer_enabled = (...fns: (() => string)[]) => () => `&:is(:where(.peer):enabled ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
