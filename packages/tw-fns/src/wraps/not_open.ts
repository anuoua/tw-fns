export const not_open = (...fns: (() => string)[]) => () => `&:not(*:is([open], :popover-open, :open)) {
${fns.map((fn) => fn()).join("\n")}
}`;
