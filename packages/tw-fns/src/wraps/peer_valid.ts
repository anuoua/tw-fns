export const peer_valid = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):valid ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
