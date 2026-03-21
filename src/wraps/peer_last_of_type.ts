export const peer_last_of_type = (...fns: (() => string)[]) => () => `&:is(:where(.peer):last-of-type ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
