export const at_max_is_by = (arbitrary: string, name: string, ...fns: (() => string)[]) => () => `@container ${name} (width < ${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
