export const peer_hover_by = (name: string) => (...fns: (() => string)[]) => () => `@media (hover: hover) { &:is(:where([aria-peer="${name}"]):hover ~ *) {
${fns.map((fn) => fn()).join("\n")}
}}`;
