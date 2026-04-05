export const peer_visited_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):visited ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
