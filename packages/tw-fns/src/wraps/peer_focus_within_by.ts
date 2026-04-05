export const peer_focus_within_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):focus-within ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
