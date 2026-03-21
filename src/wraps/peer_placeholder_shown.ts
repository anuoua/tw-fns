export const peer_placeholder_shown = (...fns: (() => string)[]) => () => `&:is(:where(.peer):placeholder-shown ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
