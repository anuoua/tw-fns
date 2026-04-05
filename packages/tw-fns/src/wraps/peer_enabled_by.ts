export const peer_enabled_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):enabled ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
