export const group_by = (name: string) => (arbitrary: string, ...fns: (() => string)[]) => `&:is(:where([aria-group="${name}"]):is(${arbitrary}) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
