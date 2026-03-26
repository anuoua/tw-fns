export const at_max_by = (name: string) => (arbitrary: string, ...fns: (() => string)[]) => `@container ${name} (width < ${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
