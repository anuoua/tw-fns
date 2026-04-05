export const peer_only_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):only-child ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
