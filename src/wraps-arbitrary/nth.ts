export const nth = (arbitrary: string, ...fns: (() => string)[]) => () => `&:nth-child(${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
