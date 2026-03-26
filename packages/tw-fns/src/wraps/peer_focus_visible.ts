export const peer_focus_visible = (...fns: (() => string)[]) => () => `&:is(:where([aria-peer]):focus-visible ~ *) {
${fns.map((fn) => fn()).join("\n")}
}`;
