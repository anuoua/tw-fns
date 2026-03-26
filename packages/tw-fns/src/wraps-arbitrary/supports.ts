export const supports = (arbitrary: string, ...fns: (() => string)[]) => () => `@supports (${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
