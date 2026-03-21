export const peer_empty = (...fns: (() => string)[]) => () => `&:is(:where(.peer):empty ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
