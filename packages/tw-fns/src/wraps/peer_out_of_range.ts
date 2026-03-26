export const peer_out_of_range = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):out-of-range ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
