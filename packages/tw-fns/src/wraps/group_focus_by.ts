export const group_focus_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):focus *) {
${fns.map((fn) => fn()).join("\n")}
}`;
