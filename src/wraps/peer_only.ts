export const peer_only = (...fns: (() => string)[]) => () => `&:is(:where(.peer):only-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
