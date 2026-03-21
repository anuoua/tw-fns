export const peer_optional = (...fns: (() => string)[]) => () => `&:is(:where(.peer):optional ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
