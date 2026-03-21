export const at_min_by = (name: string) => (arbitrary: string, ...fns: (() => string)[]) => `@container ${name} (width >= ${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
