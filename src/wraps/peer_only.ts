export const peer_only = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):only-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
