export const peer = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
