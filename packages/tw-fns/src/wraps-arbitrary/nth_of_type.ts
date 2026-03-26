export const nth_of_type = (arbitrary: string, ...fns: (() => string)[]) => () => `&:nth-of-type(${arbitrary}) {
${fns.map((fn) => fn()).join("\n")}
}`;
