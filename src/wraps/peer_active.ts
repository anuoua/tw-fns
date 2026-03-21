export const peer_active = (...fns: (() => string)[]) => () => `&:is(:where(.peer):active ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
