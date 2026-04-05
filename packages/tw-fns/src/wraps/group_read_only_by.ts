export const group_read_only_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):read-only *) {
${fns.map((fn) => fn()).join("\n")}
}`;
