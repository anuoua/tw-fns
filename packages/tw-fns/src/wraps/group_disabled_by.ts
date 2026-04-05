export const group_disabled_by = (name: string) => (...fns: (() => string)[]) => () => `&:is(:where([aria-group="${name}"]):disabled *) {
${fns.map((fn) => fn()).join("\n")}
}`;
