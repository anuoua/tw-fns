export const group = (arbitrary: string, ...fns: (() => string)[]) => () => `&:is(:where([aria-group}]):is(${arbitrary}) *) {
${fns.map((fn) => fn()).join("\n")}
}`;
