export const peer_checked_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):checked ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
