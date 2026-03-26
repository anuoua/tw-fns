export const peer_required = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):required ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
