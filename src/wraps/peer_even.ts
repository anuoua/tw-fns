export const peer_even = (...fns: (() => string)[]) => () => `&:is(:where(.peer):nth-child(even) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
