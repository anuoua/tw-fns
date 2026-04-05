export const peer_inert_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):is([inert], [inert] *) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
