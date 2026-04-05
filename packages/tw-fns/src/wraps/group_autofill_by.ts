export const group_autofill_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):autofill *) {
${fns.map((fn) => fn()).join("\n")}
}`;
