export const peer_odd = (...fns: (() => string)[]) => () => `&:is(:where(.peer):nth-child(odd) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
