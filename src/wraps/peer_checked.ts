export const peer_checked = (...fns: (() => string)[]) => () => `&:is(:where(.peer):checked ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
