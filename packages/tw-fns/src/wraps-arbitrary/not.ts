export const not = (arbitrary: string, ...fns: (() => string)[]) => () => `&:not(${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
