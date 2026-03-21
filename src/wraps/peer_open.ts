export const peer_open = (...fns: (() => string)[]) => () => `&:is(:where(.peer):is([open], :popover-open, :open) ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
