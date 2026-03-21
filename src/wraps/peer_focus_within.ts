export const peer_focus_within = (...fns: (() => string)[]) => () => `&:is(:where(.peer):focus-within ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
