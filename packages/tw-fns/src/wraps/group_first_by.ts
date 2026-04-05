export const group_first_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):first-child *) {
${fns.map((fn) => fn()).join("\n")}
}`;
