export const peer = (arbitrary: string, ...fns: (() => string)[]) => () => `&:is(:where([aria-peer])${arbitrary} ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
