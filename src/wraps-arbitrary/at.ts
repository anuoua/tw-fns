export const at = (arbitrary: string, ...fns: (() => string)[]) => () => `@container (width >= ${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
