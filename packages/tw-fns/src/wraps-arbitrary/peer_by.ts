export const peer_by = (name: string) => (arbitrary: string, ...fns: (() => string)[]) => `&:is(:where([aria-peer="${name}"])${arbitrary} ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
