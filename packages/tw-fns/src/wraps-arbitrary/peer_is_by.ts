export const peer_is_by = (arbitrary: string, name: string, ...fns: (() => string)[]) => () => `&:is(:where([aria-peer="${name}"]):is(${arbitrary}) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
