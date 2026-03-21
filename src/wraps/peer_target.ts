export const peer_target = (...fns: (() => string)[]) => () => `&:is(:where(.peer):target ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
