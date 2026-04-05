export const peer_by = (name: string, ...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
