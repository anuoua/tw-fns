export const has_open = (...fns: (() => string)[]) => () => `&:has(*:is([open], :popover-open, :open)) {
${fns.map((fn) => fn()).join("\n")}
}`;
