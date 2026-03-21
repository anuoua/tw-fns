export const peer_hover = (...fns: (() => string)[]) => () => `@media (hover: hover) { &:is(:where(.peer):hover ~ *) {
${fns.map((fn) => fn()).join("\n")}
}}`;
