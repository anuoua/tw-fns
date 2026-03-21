export const peer_last = (...fns: (() => string)[]) => () => `&:is(:where(.peer):last-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
