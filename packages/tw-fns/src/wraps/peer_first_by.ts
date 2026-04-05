export const peer_first_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):first-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
