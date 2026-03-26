export const peer_enabled = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):enabled ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
