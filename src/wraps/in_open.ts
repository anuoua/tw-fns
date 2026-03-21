export const in_open = (...fns: (() => string)[]) => () => `:where(*:is([open], :popover-open, :open)) & {
${fns.map((fn) => fn()).join("\n")}
}`;
