export const peer_indeterminate_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):indeterminate ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
