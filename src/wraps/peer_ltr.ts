export const peer_ltr = (...fns: (() => string)[]) => () => `&:is(:where(.peer):where(:dir(ltr), [dir="ltr"], [dir="ltr"] *) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
