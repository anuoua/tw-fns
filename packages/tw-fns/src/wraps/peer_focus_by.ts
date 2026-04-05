export const peer_focus_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):focus ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
