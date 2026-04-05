export const group_valid_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):valid *) {
${fns.map((fn) => fn()).join("\n")}
}`;
