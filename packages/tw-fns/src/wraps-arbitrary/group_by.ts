export const group_by = (name: string, ...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
