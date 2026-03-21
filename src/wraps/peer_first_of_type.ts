export const peer_first_of_type = (...fns: (() => string)[]) => () => `&:is(:where(.peer):first-of-type ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
