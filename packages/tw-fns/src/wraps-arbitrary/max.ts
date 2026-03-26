export const max = (arbitrary: string, ...fns: (() => string)[]) => () => `@media (width < ${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
