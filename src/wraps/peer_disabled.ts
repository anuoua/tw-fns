export const peer_disabled = (...fns: (() => string)[]) => () => `&:is(:where(.peer):disabled ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
