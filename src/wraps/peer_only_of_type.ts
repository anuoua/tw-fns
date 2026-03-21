export const peer_only_of_type = (...fns: (() => string)[]) => () => `&:is(:where(.peer):only-of-type ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
