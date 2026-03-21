export const peer_autofill = (...fns: (() => string)[]) => () => `&:is(:where(.peer):autofill ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
