export const group_only_of_type_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):only-of-type *) {
${fns.map((fn) => fn()).join("\n")}
}`;
