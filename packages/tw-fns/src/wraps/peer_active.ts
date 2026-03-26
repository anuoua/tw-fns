export const peer_active = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):active ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
