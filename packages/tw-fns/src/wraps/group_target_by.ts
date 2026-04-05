export const group_target_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):target *) {
${fns.map((fn) => fn()).join("\n")}
}`;
