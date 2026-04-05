export const peer_active_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):active ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
