export const peer_default = (...fns: (() => string)[]) => () => `&:is(:where(.peer):default ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
