export const peer_optional = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):optional ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
