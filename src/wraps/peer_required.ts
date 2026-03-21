export const peer_required = (...fns: (() => string)[]) => () => `&:is(:where(.peer):required ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
