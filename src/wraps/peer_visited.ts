export const peer_visited = (...fns: (() => string)[]) => () => `&:is(:where(.peer):visited ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
