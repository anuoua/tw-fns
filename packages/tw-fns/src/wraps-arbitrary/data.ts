export const data = (arbitrary: string, ...fns: (() => string)[]) => () => `&[data-${arbitrary}] {
${fns.map((fn) => fn()).join("\n")}
}`;
