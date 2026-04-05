export const group_checked_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):checked *) {
${fns.map((fn) => fn()).join("\n")}
}`;
