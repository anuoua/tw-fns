export const open = (...fns: (() => string)[]) => () => `&:is([open], :popover-open, :open) {
${fns.map((fn) => fn()).join("\n")}
}`;
