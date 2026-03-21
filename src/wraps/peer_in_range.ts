export const peer_in_range = (...fns: (() => string)[]) => () => `&:is(:where(.peer):in-range ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
