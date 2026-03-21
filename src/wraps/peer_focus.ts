export const peer_focus = (...fns: (() => string)[]) => () => `&:is(:where(.peer):focus ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
