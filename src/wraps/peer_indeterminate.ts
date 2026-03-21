export const peer_indeterminate = (...fns: (() => string)[]) => () => `&:is(:where(.peer):indeterminate ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
