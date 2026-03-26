export const peer_default = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):default ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
