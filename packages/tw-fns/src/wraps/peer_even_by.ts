export const peer_even_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):nth-child(even) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
