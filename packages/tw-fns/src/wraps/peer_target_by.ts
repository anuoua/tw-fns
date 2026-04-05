export const peer_target_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):target ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
