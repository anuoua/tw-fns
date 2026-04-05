export const group_empty_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):empty *) {
${fns.map((fn) => fn()).join("\n")}
}`;
