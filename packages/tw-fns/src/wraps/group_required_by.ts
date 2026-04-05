export const group_required_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):required *) {
${fns.map((fn) => fn()).join("\n")}
}`;
