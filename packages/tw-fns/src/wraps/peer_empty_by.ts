export const peer_empty_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):empty ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
